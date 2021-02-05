import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./produts/produts.module').then(m => m.ProdutsModule) },
  { path: 'orders', component: ListOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, CommonModule]
})
export class AppRoutingModule { }
