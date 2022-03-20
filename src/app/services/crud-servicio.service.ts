import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudServicioService {

  private urlBase: string = 'http://localhost:3000/usuarios/';
  private _usuarios: Usuario[] = [];

  constructor(
    private http: HttpClient
  ) { }

  get usuarios() {
    return this._usuarios;
  }

  mostrar() {
    this.http.get<Usuario[]>(this.urlBase)
      .subscribe({
        next: (res) => this._usuarios = res,
        error: (err) => console.log(err),
        complete: () => console.log('Usuarios cargados')
      });
  }

  crear(nuevoUsuario: Usuario): void {
    this.http.post<Usuario>(this.urlBase, nuevoUsuario)
      .subscribe({
        next: (res) => console.log('Creando: ', res),
        error: err => console.log('error: ', err),
        complete: () => console.log('Usuario creado correctamente')
      });
  }

  infoUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.urlBase + id)
  }

  editar(usuario: Usuario) {
    this.http.patch<Usuario>(this.urlBase + usuario.id, usuario)
      .subscribe({
        next: (res) => console.log('Usuario modificado: ', res),
        error: err => console.log('error: ', err),
        complete: () => console.log('Usuario modificado correctamente')
      });
  }
}
