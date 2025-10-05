import {
  Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef
} from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Title } from '@angular/platform-browser';
import { BillService } from '../../services/bill.service';
import { ProductService } from '../../services/product.service';
import { IBill } from '../../interface/IBill';
import { IProduct } from '../../interface/IProduct';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit, AfterViewInit, OnDestroy {
  // dữ liệu
  billList: IBill[] = [];
  filteredBillList: IBill[] = [];
  products: IProduct[] = [];

  // KPI
  totalOrders = 0;
  totalRevenue = 0;

  // filter
  filterStartDate = '';
  filterEndDate = '';

  // canvas
  @ViewChild('comboChart') comboChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('typePieChart') typePieChartRef!: ElementRef<HTMLCanvasElement>;

  // chart instance
  private comboChart?: Chart;
  private typePieChart?: Chart;

  constructor(
    private titleService: Title,
    private billService: BillService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Thống kê');
  }

  ngAfterViewInit(): void {
    // Khởi tạo chart rỗng trước
    this.initEmptyCharts();

    // Tải dữ liệu rồi cập nhật chart
    this.billService.getAll().subscribe((res: any) => {
      this.billList = res?.content ?? res ?? [];
      this.filteredBillList = [...this.billList];
      this.recomputeKPI();
      this.updateComboChart();
    });

    this.productService.getAllProduct().subscribe((res: any) => {
      this.products = res?.content ?? res ?? [];
      this.updateTypePieChart();
    });
  }

  ngOnDestroy(): void {
    this.comboChart?.destroy();
    this.typePieChart?.destroy();
  }
  print(): void {
  window.print();
}


  // ====== Filter theo ngày ======
  applyFilter(): void {
    if (this.filterStartDate && this.filterEndDate) {
      const start = new Date(this.filterStartDate);
      const end = new Date(this.filterEndDate);
      // chuẩn hóa end = 23:59:59 để bao trọn ngày
      end.setHours(23, 59, 59, 999);

      this.filteredBillList = this.billList.filter(b => {
        const d = new Date(b.dateFounded);
        return d >= start && d <= end;
      });
    } else {
      this.filteredBillList = [...this.billList];
    }

    this.recomputeKPI();
    this.updateComboChart();
  }

  // ====== KPI ======
  private recomputeKPI(): void {
    this.totalOrders = this.filteredBillList.length;
    this.totalRevenue = this.filteredBillList.reduce((s, b) => s + (b.totalMoney || 0), 0);
  }

  // ====== Init charts rỗng ======
  private initEmptyCharts(): void {
    // Combo chart
    this.comboChart?.destroy();
    this.comboChart = new Chart(this.comboChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            type: 'bar',
            label: 'Doanh thu',
            data: [],
            backgroundColor: 'rgba(54,162,235,0.3)',
            borderColor: 'rgba(54,162,235,1)',
            borderWidth: 1,
            yAxisID: 'y'
          },
          {
            type: 'line',
            label: 'Tổng đơn hàng',
            data: [],
            borderColor: 'rgba(255,99,132,1)',
            tension: 0.1,
            fill: false,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: { display: true, text: 'Doanh thu & Tổng đơn hàng theo ngày' },
          legend: { display: true }
        },
        scales: {
          y: {
            position: 'left',
            beginAtZero: true,
            title: { display: true, text: 'Doanh thu' }
          },
          y1: {
            position: 'right',
            beginAtZero: true,
            grid: { drawOnChartArea: false },
            title: { display: true, text: 'Tổng đơn hàng' }
          },
          x: { ticks: { autoSkip: false } }
        }
      }
    });

    // Pie chart
    this.typePieChart?.destroy();
    this.typePieChart = new Chart(this.typePieChartRef.nativeElement, {
      type: 'pie',
      data: { labels: [], datasets: [{ data: [] }] },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { title: { display: true, text: 'Số lượng sản phẩm theo loại' } }
      }
    });
  }

  // ====== Update dữ liệu cho combo chart ======
  private updateComboChart(): void {
    if (!this.comboChart) return;

    // gom theo ngày dùng định dạng yyyy-MM-dd để sort chính xác
    const map: Record<string, { orders: number; revenue: number }> = {};
    for (const b of this.filteredBillList) {
      const d = new Date(b.dateFounded);
      const key = `${d.getFullYear()}-${(d.getMonth()+1).toString().padStart(2,'0')}-${d.getDate().toString().padStart(2,'0')}`;
      map[key] = map[key] || { orders: 0, revenue: 0 };
      map[key].orders += 1;
      map[key].revenue += b.totalMoney || 0;
    }

    const labels = Object.keys(map).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
    const orders = labels.map(k => map[k].orders);
    const revenue = labels.map(k => map[k].revenue);

    this.comboChart.data.labels = labels;
    (this.comboChart.data.datasets[0].data as number[]) = revenue; // bar
    (this.comboChart.data.datasets[1].data as number[]) = orders;  // line
    this.comboChart.update();
  }

  // ====== Update dữ liệu cho pie chart ======
  private updateTypePieChart(): void {
    if (!this.typePieChart) return;

    const typeMap: Record<string, number> = {};
    for (const p of this.products) {
      const name = p.productType?.nameType ?? 'Khác';
      typeMap[name] = (typeMap[name] || 0) + (p.quantity || 0);
    }

    const labels = Object.keys(typeMap);
    const data = Object.values(typeMap);

    this.typePieChart.data.labels = labels;
    (this.typePieChart.data.datasets[0].data as number[]) = data;
    // màu sắc tùy chọn
    (this.typePieChart.data.datasets[0] as any).backgroundColor = [
      '#FF6384','#36A2EB','#FFCE56','#4BC0C0','#9966FF','#FF9F40','#C9CBCF'
    ];
    this.typePieChart.update();
  }
}
