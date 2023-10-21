import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainuserComponent } from '../mainuser/mainuser.component';
import { ListuComponent } from '../listu/listu.component';

const routes: Routes = [
  { path: '', component: MainuserComponent , children: [ { path: 'listuser', component: ListuComponent }]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
