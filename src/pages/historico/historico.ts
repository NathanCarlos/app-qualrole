import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Toast } from 'ionic-angular';
import { HistoricoProvider } from '../../providers/historico/historico';
import { Historico } from '../../models/historico';
import { SearchPage } from '../search/search';

/**
 * Generated class for the HistoricoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})
export class HistoricoPage {
  historico: Historico;
  constructor(public navCtrl: NavController, public navParams: NavParams, private historicoProvider: HistoricoProvider, private toast: ToastController) {
  }
  ionViewDidLoad() {
    this.historicoProvider.list().subscribe(
      (retorno: Historico) => {
        this.historico = retorno;
      }, error => {
        console.log(error);
      }
    )
  }
  reload() {
    this.navCtrl.push(HistoricoPage);
  }
  copyToClipBoard(stringToCopy) {
      localStorage.setItem("addressEvent", stringToCopy);
      this.navCtrl.push(SearchPage);
  }



}
