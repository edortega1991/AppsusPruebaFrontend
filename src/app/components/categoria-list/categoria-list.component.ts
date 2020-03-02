import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {
  cat:string;
  categorias:any=[];
  constructor(private categoriaServise:CategoriaService,private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.categoriaServise.getCategorias().subscribe(
      res=>{
        this.categorias = res;
      },
      err=>console.error(err)
    )
    
  }

  getCategoria(){
    
    const param= this.activeRoute.snapshot.params;
     this.categoriaServise.getCategorias().subscribe(
       res => {
         console.log(res);
         debugger;
         if(res!= undefined){
           this.cat = res[0].tipo
         }
         this.categorias =res;
         
       },
       err => console.error(err)
     )
 
   }

  deleteCategorias(id:string){
    
    this.categoriaServise.deleteCategoria(id).subscribe(
      res => {
        console.log(res);
        this.getCategoria();
      },
      err => console.log(err)
    );
    console.log(id);

  }

}
