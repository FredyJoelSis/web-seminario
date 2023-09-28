import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  aggClientes(){
    this.router.navigate(['/agregarClientes'])
  }
  aggEmpleados(){
    this.router.navigate(['/aggEmpleados'])
  }
  programarVisita(){
    this.router.navigate(['/programarVisitas'])
  }
  solicitudVisitas(){
    this.router.navigate(['/solicitudVisitas'])
  }
  genReportes(){
    this.router.navigate(['/reportes'])
  }
  configuraciones(){
    this.router.navigate(['/configuraciones'])
  }

}
