import { Component, OnInit } from '@angular/core';
//formulario reactivo
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequestBackendService } from '../request-backend.service';

@Component({
  selector: 'crud-mecanico',
  templateUrl: './crud-mecanico.component.html',
  styleUrls: ['./crud-mecanico.component.scss']
})
export class CrudMecanicoComponent implements OnInit {

  displayedColumns: string[] = ['nombres', 'apellidos', 'telefono'];
  dataSource = [];
  formMecanico: FormGroup = new FormGroup({});

  constructor(private servicioBackend: RequestBackendService,
    private fb: FormBuilder) { 

      this.getMecanicos();

      this.formMecanico = this.fb.group({
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

  ///Metodo para obtener los Mecanicos
  getMecanicos(): void{
    console.log("funcion para obtener mecanicos");
    this.servicioBackend.getData('mecanicos').subscribe(
      (data) => {
        console.log("data:",data);
        this.dataSource = data;
      },
      (error) => {
        console.log("entra a error");
        console.log(error);
        this.dataSource =[]
      }
    )
  }
  /// Metodo para guardar Mecanicos 
  saveMecanico(): void {
  const datosMecanico = this.formMecanico.getRawValue();
  console.log(datosMecanico);
  this.servicioBackend.postData('mecanicos', JSON.stringify(datosMecanico)).subscribe({
    next: (data) => {
      console.log(data);
      this.getMecanicos();
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
