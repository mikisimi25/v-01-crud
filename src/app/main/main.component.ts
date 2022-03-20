import { Component, OnInit } from '@angular/core';
import { CrudServicioService } from '../services/crud-servicio.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {

  constructor(
    private crud: CrudServicioService
    ) { 
      this.crud.mostrar()
    }

  ngOnInit(): void {
  }

  get usuarios() {
    return this.crud.usuarios;
  }

}
