import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';

const routes: Routes = [
  {
    path:'',
    component:ProductDetailsPageComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ECommerceProductPageRoutingModule { }
