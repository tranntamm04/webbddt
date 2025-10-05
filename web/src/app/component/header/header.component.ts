import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { LoginService } from '../../services/login.service';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  name = '';
  isAuthPage = false;

  private readonly AUTH_PATHS = ['/login'];
  private sub?: Subscription;

  constructor(
    private loginService: LoginService,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.name = this.loginService.getRole();

    const setFlag = (url: string) =>
      (this.isAuthPage = this.AUTH_PATHS.some((p) => url.startsWith(p)));

    setFlag(this.router.url);

    this.sub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => setFlag(e.urlAfterRedirects || e.url));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  on(): void {
    this.productService.key = '';
    this.name = this.loginService.getRole();
  }

  logout(): void {
    this.loginService.removeRole();
    this.loginService.removeToken();
    this.loginService.removeUserName();
    this.cartService.xoaHet();
    this.router.navigateByUrl('/login');
  }
}
