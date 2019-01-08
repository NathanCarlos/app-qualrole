import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UsuariosServiceProvider } from '../../providers/usuarios-service/usuarios-service';
import { User } from '../../models/user';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private email;
  private senha;
  public verificaRetorno;
  usuario: User;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController,
    private usuariosService: UsuariosServiceProvider) {
  }

  ionViewDidLoad() {
    if (localStorage.getItem('hashedid')) {
      this.navCtrl.push(HomePage, {}, { animate: false })
    }
  }
  entrar() {
    this.usuariosService.authentication(this.email, this.senha)
      .subscribe(
        (dados: any) => {
          if (JSON.stringify(dados).length != 0) {
            localStorage.setItem('hashedid', JSON.stringify(dados[0].id));
            localStorage.setItem('nome', dados[0].NOME_CLIENTE);
            localStorage.setItem('email', dados[0].EMAIL_CLIENTE);
            localStorage.setItem('cidade_cliente', dados[0].CIDADE_CLIENTE);
            localStorage.setItem('sobrenome', dados[0].SOBRENOME_CLIENTE);
            localStorage.setItem('nickname', dados[0].NICKNAME_CLIENTE);
            let perfil = [];
            let contador = 0;
            dados[1].forEach(element => {
              perfil[contador] = element.DESCRICAO_PREFENCIA;
              contador++;
            });
            localStorage.setItem('preferencia', JSON.stringify(perfil));
            this.navCtrl.setRoot(TabsPage);
          }
          else {
            this.toast.create({
              message: "Usuário ou Senha Inválidos!",
              duration: 3000,
              position: "top"
            }).present();
          }
        }, error => {
          this.toast.create({
            message: "Usuário ou Senha Inválidos!",
            duration: 3000,
            position: "top"
          }).present();
        })
  }
}
