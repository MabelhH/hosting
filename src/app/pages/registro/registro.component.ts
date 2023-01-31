import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl } from '@angular/forms';
import {  Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicio/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  implements OnInit{

  public forRegistro!: FormGroup;
 

  constructor(
    private userService:UsuarioService, 
    private roter:Router ,private formbuilder:FormBuilder){
      this.forRegistro=new FormGroup({
      nombre:new FormControl(),
      apellido:new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      })

  }

  ngOnInit(): void {  
    this.forRegistro = this.formbuilder.group({
      nombre:['',[Validators.required,Validators.minLength(10)]],
      apellido:['',[Validators.required,Validators.minLength(10)]],
      email:['',[Validators.required,Validators.minLength(5),Validators.email]],
      password:['',[Validators.required,Validators.minLength(5)]]
    })
}


onSubmit(){
  console.log(this.forRegistro.value)
  const response = this.userService.addProduct(this.forRegistro.value)
  console.log(response)
  this.roter.navigate(['lista']);
 

  this.userService.registrouser(this.forRegistro.value)
   .then( response => {
    console.log(response)
    // this.roter.navigate(['lista']);
   })
   .catch(erorr => console.log(erorr));

}
}
