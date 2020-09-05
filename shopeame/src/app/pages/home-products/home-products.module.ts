import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeProductsRoutingModule } from './home-products-routing.module';
import { HomeProductsComponent } from './home-products.component';


@NgModule({
  declarations: [HomeProductsComponent],
  imports: [
    CommonModule,
    HomeProductsRoutingModule
  ]
})
export class HomeProductsModule { }
