import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeManagementsComponent} from './home-managements.component';


const routes: Routes = [
  {
    path: '', component: HomeManagementsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeManagementsRoutingModule {
}
