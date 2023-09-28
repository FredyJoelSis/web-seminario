
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiService } from './api.service';
import { RESTORED_VIEW_CONTEXT_NAME } from '@angular/compiler/src/render3/view/util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private api: apiService) {
  }

  ngOnInit(): void {

  }

  body = {
    correo: '',
    password: ''
  }

  authUser() {

    this.router.navigate(['/Inicio'])
  /*  if (this.body.correo !== '' && this.body.password !== '')
      try {
        this.api.auth(this.body).subscribe((data: any) => {
          if (data.id === 1) {
            console.log(data);
            this.router.navigate(['/Inicio'])
          }
          else if (data.id === 0) {
            console.log('error de autenticacion')
          }

        });
      } catch (err) {

      }*/

  }

}

