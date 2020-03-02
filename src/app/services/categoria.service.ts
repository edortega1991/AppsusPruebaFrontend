import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Categoria } from '../models/Categoria'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  API_URI = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  getCategorias(){
    return this.http.get(`${this.API_URI}/categorias`);
  }

  getCategoria(id:string):Observable<any>{
    return this.http.get(`${this.API_URI}/categorias/${id}`);
  }

  deleteCategoria(id:string){
    return this.http.delete(`${this.API_URI}/categorias/${id}`);
  }

  saveCategoria(categoria:Categoria){
    return this.http.post(`${this.API_URI}/categorias`,categoria);
  }

  updateCategoria(id:string|number, updateCategoria:Categoria): Observable<any> {
    return this.http.put(`${this.API_URI}/categorias/${id}`,updateCategoria);
  }
}



