import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { CrudServicioService } from '../services/crud-servicio.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [
  ]
})
export class CreateComponent implements OnInit {

  constructor(
    private crud: CrudServicioService
  ) { }

  ngOnInit(): void {
  }

  usuario: Usuario = <Usuario>{};

  crear() {
    if (this.usuario.login.trim().length !== 0) {
      this.crud.crear(this.usuario);
      this.usuario = <Usuario>{};
    }
  }

}
