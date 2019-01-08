import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user';

@Injectable()
export class UsuariosServiceProvider {
  _usuario: User;
  private baseUrl = 'http://localhost:3000';
  //Para ele saber que está recebendo um json.
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _http: HttpClient) {

  }
  //Método de autenticação.
  authentication(email_user, senha) {
    return this._http.post<User>(`${this.baseUrl}/cliente/auth`, { email: email_user, password: senha }, { headers: this.headers });
  }
  //Método de cadastro.
  cadastro(_nickname, _name, _sobrenome, _password, _email, _cidade, _dataNascimento, _preferencia) {
    return this._http.post(`${this.baseUrl}/cliente/create`, {
      nickname: _nickname,
      password: _password,
      nome_cli: _name,
      sobrenome: _sobrenome,
      email: _email,
      city: _cidade,
      dtnascimento: _dataNascimento,
      preferencia: _preferencia
    }, { headers: this.headers });
  }
  findById(idUser) {
    return this._http.get(`${this.baseUrl}/cliente/findbyid/${idUser}`, { headers: this.headers });
  }
  update(_nickname, _name, _sobrenome, _password, _email, _cidade, _dataNascimento) {
    return this._http.put(`${this.baseUrl}/cliente/update/${localStorage.getItem('hashedid')}`, {
      nickname: _nickname,
      password: _password,
      nome_cli: _name,
      sobrenome: _sobrenome,
      email: _email,
      city: _cidade,
      dtnascimento: _dataNascimento
    }, { headers: this.headers });
  }
  findPerfil(idUser)
  {
    return this._http.get(`${this.baseUrl}/cliente/perfil/${idUser}`, { headers: this.headers });
  }
  updatePerfil(idUser, _preferencia){
    return this._http.put(`${this.baseUrl}/cliente/update/perfil/${idUser}`, { preferencia:  _preferencia}, { headers: this.headers });
  }
  findNotifications(_perfil){
    return this._http.get(`${this.baseUrl}/cliente/notifications/${_perfil}`, { headers: this.headers });
  }

}
