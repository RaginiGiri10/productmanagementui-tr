import { LoginComponent } from './components/authentication/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/authentication/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { AuthguardService } from './guards/authguard.service';

const routes: Routes = [

  { path: 'home', component: HomeComponent,canActivate:[AuthguardService] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addproduct', component: AddProductComponent,canActivate:[AuthguardService] },
  { path:'editproduct/:id',component:EditProductComponent,canActivate:[AuthguardService]},
  { path: 'products', component: ProductListComponent, canActivate:[AuthguardService]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
