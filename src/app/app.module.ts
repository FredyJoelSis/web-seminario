import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { VisitasComponent } from './visitas/visitas.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { apiService } from './login/api.service';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './clientes/clientes.component';
import { SVisitasComponent } from './s-visitas/s-visitas.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    VisitasComponent,
    EmpleadosComponent,
    ClientesComponent,
    SVisitasComponent,
    ReportesComponent,
    ConfiguracionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [apiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
