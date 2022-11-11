import { Component, OnInit } from '@angular/core';
import { RequestBackendService } from './../request-backend.service';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
  
@Component({
  selector: 'app-crud-vehiculo',
  templateUrl: './crud-vehiculo.component.html',
  styleUrls: ['./crud-vehiculo.component.scss']
})

export class CrudVehiculoComponent implements OnInit {

  displayedColumns: string[] = ['tipo', 'marca', 'modelo'];
  dataSource = [];
  formVehiculo: FormGroup = new FormGroup({});

  constructor(
        private servicioBackend: RequestBackendService,
        private fb: FormBuilder ) {

      this.getVehiculo();

      this.formVehiculo = this.fb.group({
        placa: [''],
        tipo: [''],
        marca: [''],
        modelo: [''],
        duenoId: [''],
      });
  }
  

  
  ngOnInit(): void {  }

  getVehiculo(): void{
    this.servicioBackend.getData('vehiculos').subscribe({
      next: (data) => {
        console.log(data);
        this.dataSource = data;
        },
      error: (error) => {
        console.log(error);
        this.dataSource =[]
      },
      complete: () => {
          console.log('complete')
        },
      })
  }

  //Funcion para agregar vehculo
 saveVehiculo(): void {
  console.log("Funcion para agregar vehculo");
  const datosVehiculo = this.formVehiculo.getRawValue();
  console.log(datosVehiculo);
  
  this.servicioBackend.postData('vehiculos', JSON.stringify(datosVehiculo)).subscribe({
    next: (data) => {
      console.log(data);
      this.getVehiculo();
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
