import { Component ,OnInit } from '@angular/core';
import { tienda } from 'src/app/interfaces/interface';
import { UsuarioService } from 'src/app/servicio/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  registro!:tienda[];

  constructor( private registroServices:UsuarioService){

  }
  ngOnInit(): void {
    
    this.registroServices.getFacrmacia().subscribe(registro => {
     this.registro= registro


    }) 
    
   
  }
  eliminar(registro : tienda){
    const response = this.registroServices.deletedFarmacia(registro)
    console.log(response)
  }

}

