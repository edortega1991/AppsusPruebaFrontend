import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductoListComponent } from './components/producto-list/producto-list.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { CategoriaListComponent } from './components/categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './components/categoria-form/categoria-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/productos',
    pathMatch:'full'
  },{
    path:'productos/:idCategoria',
    component:ProductoListComponent
  },
  {
    path:'productos',
    component:ProductoListComponent
  },
  {
    path:'productos/add/:idCategoria',
    component: ProductoFormComponent
  },
  {
    path:'producto/add',
    component: ProductoFormComponent
  },
  {
    path:'productos/edit/:id',
    component: ProductoFormComponent
  },
  {
    path:'categorias',
    component:CategoriaListComponent
  },
  {
    path:'categorias/add',
    component: CategoriaFormComponent
  },
  {
    path:'categoria/edit/:id',
    component: CategoriaFormComponent
  },
  {
    path:'login',
    component: LoginFormComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
