import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../pages/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public httpOptions: any;
  private usuario: Usuario;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Método para iniciar sesión
   * @param email 
   * @param password 
   */
  public login(usuario: Usuario) {
    return this.http.post<any>(environment.apiUrl + 'login', usuario);
  }

  public setUsuario(usuario: Usuario) {
    this.usuario = usuario;
  }

  public getUsuario() {
    return this.usuario;
  }
}
