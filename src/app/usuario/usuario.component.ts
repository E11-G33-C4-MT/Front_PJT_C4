import { Component, OnInit } from '@angular/core';
//formulario reactivo
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RequestBackendService } from '../request-backend.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  //displayedColumns: string[] = ['nombre', 'apellido', 'email', 'telefono', 'fechaNacimiento', 'tipoUsuario'];
  displayedColumns: string[] = ['nombres', 'apellidos', 'telefono'];
  dataSource = [];
  formUser: FormGroup = new FormGroup({}); //datos para consultas en DB
  
  constructor(
    private servicioBackend: RequestBackendService,
    private fb: FormBuilder) 
  { 
    this.getUser();

    this.formUser = this.fb.group({
      nombres: [''], 
      apellidos: [''], 
      // email: [''], 
      telefono: [''], 
      // fechaNacimiento: [''], 
      // tipoUsuario: [''], 
    });
  }

  ngOnInit(): void {
  }

  ///Metodo para obtener los usarios
  getUser(): void{
    console.log("funcion para obtener usuarios");
    this.servicioBackend.getData('duenos').subscribe({
      next: (data) => {
        console.log("data:",data);
        this.dataSource = data;
      },
      error: (error) => {
        console.log("entra a error");
        console.log(error);
        this.dataSource =[]
      },
      complete: () => {
        console.log('complete')
      },
    })
  }
  /// Metodo para guardar usuarios 
  saveUser(): void {
  const datosUser = this.formUser.getRawValue();
  console.log(datosUser);
  this.servicioBackend.postData('duenos', JSON.stringify(datosUser)).subscribe({
    next: (data) => {
      console.log(data);
      this.getUser();
      },
    error: (error) => {
      console.log(error)
    },
    complete: () => {
        console.log('complete')
      },
    });
  }
}