import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  ///variable del input
  value = 'Clear me';

  longText = `Somos un taller automotirz creado bajo un sistema de control de calidad, 
  con el objetivo de entregar un servicio eficaz y transparente para que su vehiculo 
  se mantenga en perfectas condiciones de operacion y seguridad`;


  constructor() { }

  ngOnInit(): void {
  }


}



