import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';

import { RegistroComponent } from './registro/registro.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CrudVehiculoComponent } from './crud-vehiculo/crud-vehiculo.component';
import { CrudMecanicoComponent } from './crud-mecanico/crud-mecanico.component';
import { CrudMantenimientosComponent } from './crud-mantenimientos/crud-mantenimientos.component';
import { LayoutComponent } from './layout/layout.component';





const routes: Routes = [
  {path: '', component: InicioSesionComponent},
  {path: 'registro', component: RegistroComponent },
  {path: 'layout', component: LayoutComponent },
  {path: 'usuario', component: UsuarioComponent },
  {path: 'vehiculo', component: CrudVehiculoComponent},
  {path: 'mecanico', component: CrudMecanicoComponent },
  {path: 'mantenimiento', component: CrudMantenimientosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
