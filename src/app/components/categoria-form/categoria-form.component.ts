import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { ActivatedRoute,Router } from '@angular/router'

import { CategoriaService } from '../../services/categoria.service'
import { ThrowStmt } from '@angular/compiler';
 
@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {
editar:boolean=false;
  categoria: Categoria ={
    id:0,
    nombre:'',
    descripcion:'',
    user_id:0
  }
  constructor(private categoriaService:CategoriaService, private router:Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
    const params = this.activatedRoute.snapshot.params;
    
    if(params.id){
      
      this.categoriaService.getCategoria(params.id)
      .subscribe(
        res=>{
          console.log(res);
          this.categoria = res[0];
          this.editar=true;
        },
        err=> console.log(err)
      );
      }
  }

  saveNewCategoria(){
    const params = this.activatedRoute.snapshot.params;
    
      console.log(this.categoria)
      delete this.categoria.id;
      this.categoriaService.saveCategoria(this.categoria)
      .subscribe(
       res=>{
          console.log(res)
          this.router.navigate(['/categorias'])
        },
        err=> console.error(err)
      )
  }

  
  updateCategoria(){
    
    this.categoriaService.updateCategoria(this.categoria.id,this.categoria)

    .subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/categorias'])
      },
      err=>console.log(err)
    )
    //console.log(this.producto);
  }
  
}
