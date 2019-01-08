import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  private EMAIL;
  constructor(public navCtrl: NavController, public navParams: NavParams, private ToastController: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }
  concluir(){
    this.navCtrl.popToRoot();
    this.ToastController.create({
      message: "Email de troca de senha enviado.",
      position: "top",
      duration: 3000
    }).present();
  }

}
