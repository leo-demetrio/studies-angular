import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
// import { LoginComponent } from './core/components/login/login.component';

const routes: Routes = [
  // {
  //   path: "login",
  //   component: LoginComponent
  // },
  {
    path: "",
    component: HomeComponent
    // component: LoginComponent
  },
  {
    path: "products",
    component: ProductComponent
  },
  {
    path: "product/create",
    component: ProductCreateComponent
  },
  {
    path: "product/delete/:id",
    component: ProductDeleteComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
