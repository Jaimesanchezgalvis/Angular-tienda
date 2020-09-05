import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: ``, loadChildren: () =>
      import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: `products`, loadChildren: () =>
      import('./pages/home-products/home-products.module').then(m => m.HomeProductsModule)
  },
  {
    path: `management`, loadChildren: () =>
      import('./pages/home-managements/home-managements.module').then(m => m.HomeManagementsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
