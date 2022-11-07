import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CrudVehiculoComponent } from './crud-vehiculo/crud-vehiculo.component';
import { CrudMecanicoComponent } from './crud-mecanico/crud-mecanico.component';
import { CrudMantenimientosComponent } from './crud-mantenimientos/crud-mantenimientos.component';
import { RegistroComponent } from './registro/registro.component';

import {FormsModule} from "@angular/forms";
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { LayoutComponent } from './layout/layout.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ContentComponent } from './layout/content/content.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    CrudVehiculoComponent,
    InicioSesionComponent,
    LayoutComponent,
    ToolbarComponent,
    SidebarComponent,
    ContentComponent,
    CrudMecanicoComponent,
    CrudMantenimientosComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    MatTableModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
