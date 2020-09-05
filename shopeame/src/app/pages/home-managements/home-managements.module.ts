import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeManagementsRoutingModule } from './home-managements-routing.module';
import { HomeManagementsComponent } from './home-managements.component';


@NgModule({
  declarations: [HomeManagementsComponent],
  imports: [
    CommonModule,
    HomeManagementsRoutingModule
  ]
})
export class HomeManagementsModule { }
