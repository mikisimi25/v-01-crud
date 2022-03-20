import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../interfaces/usuario.interface';
import { CrudServicioService } from '../services/crud-servicio.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: [
  ]
})
export class EditComponent implements OnInit {

  usuario: Usuario = <Usuario>{};

  constructor(
    private activatedRoute: ActivatedRoute,
    private crud: CrudServicioService
  ) { 
    this.activatedRoute.params.subscribe(({id}) => {
      this.crud.infoUsuario(id).subscribe({
        next: (res) => this.usuario = res,
        error: (err) => console.log(err),
        complete: () => console.log('info enviada')
      });
    })
    
  }

  ngOnInit(): void {
  }

  editar() {
    this.crud.editar(this.usuario);
  }

}
