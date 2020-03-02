import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos: any =[];
  cat:string;

  constructor(private produtoService: ProductosService,private activeRoute : ActivatedRoute) {

   }

  ngOnInit(): void {
    debugger;
    const param= this.activeRoute.snapshot.params;
    this.getProductos();
  }

  getProductos(){
   
   const param= this.activeRoute.snapshot.params;
    this.produtoService.getProductos().subscribe(
      res => {
        console.log(res);
        
        if(res!= undefined){
          this.cat = res[0].tipo
        }
        this.productos =res;
        
      },
      err => console.error(err)
    )

  }

  deleteProducto(id:string){
    this.produtoService.deleteProducto(id).subscribe(
      res => {
        console.log(res);
        this.getProductos();
      },
      err => console.log(err)
    );
    console.log(id);

  }

  

}
