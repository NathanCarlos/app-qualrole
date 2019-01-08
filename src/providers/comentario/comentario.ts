import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the ComentarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ComentarioProvider {
  private baseUrl = "http://localhost:3000";
  //Para ele saber que está recebendo um json.
  private headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(public http: HttpClient) {}
  create(_empresa, comentario) {
    return this.http.post(
      `${this.baseUrl}/comentario/create`,
      {
        cliente: localStorage.getItem("hashedid"),
        empresa: _empresa,
        descricao: comentario,
        data: new Date()
      },
      { headers: this.headers }
    );
  }
  find(_empresa) {
    return this.http.get(`${this.baseUrl}/comentarios/find/${_empresa}`, {
      headers: this.headers
    });
  }
}
