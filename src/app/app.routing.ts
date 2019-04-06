import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ProductsComponent } from './products/products.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { LogoComponent } from './logo/logo.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'user-profile', component: ProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'nucleoicons', component: NucleoiconsComponent },
  {
    path: "create",
    component: ProductsComponent,
    outlet: "userinfo"
  },
  {
    path: "product-line-info",
    component: MyproductsComponent,
    outlet: "userinfo"
  },
  {
    path: "logo",
    component: LogoComponent,
    outlet: "userinfo"
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
