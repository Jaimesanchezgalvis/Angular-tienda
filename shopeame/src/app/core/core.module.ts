import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './Components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import {HeaderComponent} from './Components/header/header.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [MenuComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    HttpClientModule
  ],
  exports: [FooterComponent, HeaderComponent]
})
export class CoreModule { }
