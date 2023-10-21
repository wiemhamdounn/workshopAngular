import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainproviderComponent } from '../mainprovider/mainprovider.component';

const routes: Routes = [
  { path: '', component: MainproviderComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
