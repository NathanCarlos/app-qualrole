import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { PerfilPage } from '../perfil/perfil';
import { ConfigPerfilPage } from '../config-perfil/config-perfil';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    if(!localStorage.getItem('hashedid')){
      this.navCtrl.push(WelcomePage, {}, {animate:false})

    }
  }
  logout(){
    localStorage.clear();
    // window.location.href="http://localhost:8100";
    window.location.reload();
    this.navCtrl.setRoot(WelcomePage);
  }
  perfil(){
    this.navCtrl.push(PerfilPage);
  }
  configPerfil(){
    this.navCtrl.push(ConfigPerfilPage);
  }
}
