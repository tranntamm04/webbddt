import {Component, Inject, OnInit} from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IEmployee} from "../../interface/IEmployee";
import {IAccountEmployee} from "../../interface/IAccountEmployee";

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {
  id: String ='';
  employee!: IAccountEmployee;

  constructor(private employeeService: EmployeeService,public dialog: MatDialogRef<DetailEmployeeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) {
  } 

  ngOnInit(): void {
    this.id = this.data.employeeId;
    this.employeeService.getEmployeeById(this.id).subscribe((data) => {
      this.employee= data;
    })
  }

  close() {
    this.dialog.close()
  }
}
