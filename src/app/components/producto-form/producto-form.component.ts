import { Component, OnInit, HostBinding } from '@angular/core';
import { Producto } from '../../models/Producto';
import { ActivatedRoute, Router } from '@angular/router';

import {ProductosService} from '../../services/productos.service'
import { CategoriaService} from '../../services/categoria.service'
//import { ProductoListComponent} from '../producto-list/producto-list.component'
import {Categoria} from '../../models/Categoria'

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
  categorias:any=[];
  @HostBinding('class') classes = 'row';

  producto : Producto ={
    id:0,
    nombre:'',
    tipo:0,
    cantidad:0,
    precio:0,
    nombreCategoria:"",
  };
  edit: boolean =false;
  cat:string;
  constructor(private productoService: ProductosService, private router:Router,
     private activeRoute : ActivatedRoute,private categoriaServise:CategoriaService) {

   }

  ngOnInit(): void {
    debugger;
    const params = this.activeRoute.snapshot.params;
    
    this.producto.tipo=params.idCategoria;
    this.cat=params.idCategoria;
    if(params.id){
      
      this.productoService.getProducto(params.id)
      .subscribe(
        res=>{
          console.log(res);
          this.producto = res[0];
          this.edit=true;
        },
        err=> console.log(err)
      );
debugger;
      }
      this.categoriaServise.getCategorias().subscribe(
        res=>{
          this.categorias = res;
        },
        err=>console.error(err)
      )
    
    
  }

  saveNewProducto(){
    debugger;
    const cate=this.cat
    //console.log(id);
    const par =this.activeRoute.snapshot.params;
    console.log(par)

    delete this.producto.id;
    delete this.producto.nombreCategoria;
    debugger;
    this.productoService.saveProducto(this.producto)
    .subscribe(
      res =>{
        debugger;
        console.log(res)
        this.router.navigate(['/productos']);
      },
      err => console.error(err)
    )
    
  }



  updateProducto(){
    
    this.productoService.updateProducto(this.producto.id,this.producto)

    .subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/productos'])
      },
      err=>console.log(err)
    )
    //console.log(this.producto);
  }

}
