import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ComentarioProvider } from '../../providers/comentario/comentario';
import { SearchPage } from '../search/search';

/**
 * Generated class for the ComentarioEmpresaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comentario-empresa',
  templateUrl: 'comentario-empresa.html',
})
export class ComentarioEmpresaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private ComentarioProvider: ComentarioProvider, private ToastController: ToastController) {
  }
  private objectNotification;
  private comentarios;
  private DESC_COMENTARIO;
  private NOME_EMPRESA;
  ionViewDidLoad() {
    this.objectNotification = JSON.parse(localStorage.getItem("objectNotification"));
    this.NOME_EMPRESA = this.objectNotification.NOME_EMPRESA;
    this.ComentarioProvider.find(this.objectNotification.ID_EMPRESA)
      .subscribe(
        (retorno: any) => {
          this.comentarios = retorno;
        },
        error => {
          console.log(error);
        }
      )
  }
  comentar() {
    this.ComentarioProvider.create(this.objectNotification.ID_EMPRESA, this.DESC_COMENTARIO)
      .subscribe(
        (retorno) => {
          this.navCtrl.push(ComentarioEmpresaPage);
          this.ToastController.create({
            message: "Comentário Inserido com Sucesso!",
            position: "top",
            duration: 3000
          }).present()

          console.log(retorno);
        }, error => {
          console.log(error);
        }
      );
  }
  eventAddress() {
    localStorage.setItem("addressEvent", this.objectNotification.ENDERECO_EVENTO);
    localStorage.removeItem("objectNotification");
    this.navCtrl.push(SearchPage);

  }

}
