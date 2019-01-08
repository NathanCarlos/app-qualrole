import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuariosServiceProvider } from '../../providers/usuarios-service/usuarios-service';
import { SearchPage } from '../search/search';
import { ComentarioEmpresaPage } from '../comentario-empresa/comentario-empresa';

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UsuariosServiceProvider) {
  }
  private notifications;
  ionViewDidLoad() {
    let str = localStorage.getItem("preferencia");
    let newStr = str.replace("[", "(");
    let newStr2 = newStr.replace("]", ")");
    this.userService.findNotifications(newStr2).subscribe(
      (retorno: any) => {
        this.notifications = retorno;
        console.log(retorno);
      }, error => {
        console.log(error);
      }
    )
  }
  reload() {
    this.navCtrl.push(NotificationsPage);
  }
  comentario(_notification) {
    localStorage.setItem("objectNotification", JSON.stringify(_notification));
    this.navCtrl.push(ComentarioEmpresaPage);
  }
}
