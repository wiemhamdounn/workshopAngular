
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './home/home.component';
import { MainuserComponent } from './mainuser/mainuser.component';
import { MainproductComponent } from './mainproduct/mainproduct.component';
import { MainproviderComponent } from './mainprovider/mainprovider.component';

import { ListuComponent } from './listu/listu.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent,
    children: [
      { path: 'mainUser',loadChildren:()=> 
      import('./user/user.module').then(m=>m.UserModule)
    },
    { path: 'home', component: HomeComponent },
      { path: 'productManagment',loadChildren:()=> 
      import('./product/product.module').then(m=>m.ProductModule)},
      { path: 'providerManagment',loadChildren:()=> 
      import('./provider/provider.module').then(m=>m.ProviderModule)},
      //{ path: 'listuser', component: ListuserComponent },
      { path:'**',component:NotfoundComponent},
    ],
    
  },
  { path: '', redirectTo: 'header', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}