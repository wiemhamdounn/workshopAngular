import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainproductComponent } from '../mainproduct/mainproduct.component';

const routes: Routes = [
  { path: '', component: MainproductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
