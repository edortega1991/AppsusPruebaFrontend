import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationsComponent } from './components/navigations/navigations.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';

import { ProductosService } from './services/productos.service';
import { CategoriaService } from './services/categoria.service';

import { CategoriaFormComponent } from './components/categoria-form/categoria-form.component';
import { CategoriaListComponent } from './components/categoria-list/categoria-list.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationsComponent,
    ProductoFormComponent,
    ProductoListComponent,
    CategoriaFormComponent,
    CategoriaListComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    ProductosService,
    CategoriaService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
