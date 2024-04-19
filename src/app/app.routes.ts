import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailesComponent } from './components/detailes/detailes.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { VisionComponent } from './components/vision/vision.component';
import { ValuesComponent } from './components/values/values.component';
import { LoginComponent } from './components/login/login.component';
import{authguardGuard} from './guards/authguard.guard';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { RegisterComponent } from './components/register/register.component';
export const routes: Routes = [
 {path : '', pathMatch:"full", redirectTo :'Home'},   
{path:'Home', component:HomeComponent },
{path:'About', component:AboutComponent,
children : [
      {path : '', pathMatch:"full", redirectTo :'Vision'},
      {path: 'Vision', component:VisionComponent},
      {path:'Values', component:ValuesComponent}
] },

{path:'Products',
 loadComponent:()=>import('./components/order/order.component').then((obj)=>obj.OrderComponent)
, canActivate:[authguardGuard]},


{path:'Login', component:LoginComponent},
{path:'Details/:id', component:DetailesComponent},
{path:'AddProduct', component:AddproductComponent},
{path:'UpdateProduct/:id', component:UpdateproductComponent},
{path: 'Register', component:RegisterComponent},
{path:'**', component:NotFoundComponent}




];
