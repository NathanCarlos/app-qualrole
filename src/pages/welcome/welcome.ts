import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, Tab } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistroPage } from '../registro/registro';
import { TabsPage } from '../tabs/tabs';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    if(localStorage.getItem('hashedid')){
      this.navCtrl.push(TabsPage, {}, {animate:false})
    }
  }
  TelaCadastro(){
    this.navCtrl.push(RegistroPage);
  }
  TelaLogin(){
    this.navCtrl.push(LoginPage);
  }
  forgotPassword(){
    this.navCtrl.push(ForgotPasswordPage);
  }

}
