import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Historico } from "../../models/historico";
/*
  Generated class for the HistoricoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoricoProvider {
  private historico: Historico;
  private baseUrl = "http://localhost:3000";
  private headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(public http: HttpClient) {}
  create(enderecoPesquisado) {
    return this.http.post(
      this.baseUrl + "/historico/create",
      {
        id_cliente: localStorage.getItem("hashedid"),
        data_pesquisada: new Date(),
        endereco_pesquisado: enderecoPesquisado
      },
      { headers: this.headers }
    );
  }
  list() {
    return this.http.get<Historico>(
      this.baseUrl + "/historico/find/" + localStorage.getItem("hashedid"),
      { headers: this.headers }
    );
  }
}
