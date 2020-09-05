import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeProductsComponent} from '../pages/home-products/home-products.component';


@NgModule({
  declarations: [HomeProductsComponent],
  exports: [
    HomeProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
