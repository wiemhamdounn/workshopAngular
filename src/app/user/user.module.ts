import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListuComponent } from '../listu/listu.component';
import { MainuserComponent } from '../mainuser/mainuser.component';


@NgModule({
  declarations: [
    ListuComponent,
    MainuserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
