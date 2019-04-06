import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: "create",
        component: ProductsComponent,
        outlet: "userinfo"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
