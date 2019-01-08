import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { User } from '../../models/user';
import { UsuariosServiceProvider } from '../../providers/usuarios-service/usuarios-service';
import { HomePage } from '../home/home';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  private NICKNAME_CLIENTE;
  private password;
  private NOME_CLIENTE;
  private SOBRENOME_CLIENTE;
  private EMAIL_CLIENTE;
  private CIDADE_CLIENTE;
  private DT_NASCIMENTO_CLIENTE: Date;
  private PREFERENCIA = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private usersService: UsuariosServiceProvider,
    private toast: ToastController) {
  }

  ionViewDidLoad() {

  }
  concluir() {
    if(this.PREFERENCIA[0] == 1){this.PREFERENCIA[0] = "Bares"}
    else{ this.PREFERENCIA.splice(0) }
    if(this.PREFERENCIA[1] == 1){this.PREFERENCIA[1] = "Baladas"}
    else{ this.PREFERENCIA.splice(1) }
    if(this.PREFERENCIA[2] == 1){this.PREFERENCIA[2] = "Restaurantes"}
    else{ this.PREFERENCIA.splice(2) }
    if(this.PREFERENCIA[3] == 1){this.PREFERENCIA[3] = "Shows"}
    else{ this.PREFERENCIA.splice(3) }
    if(this.PREFERENCIA[4] == 1){this.PREFERENCIA[4] = "Tabacarias"}
    else{ this.PREFERENCIA.splice(4) }
    if(this.PREFERENCIA[5] == 1){this.PREFERENCIA[5] = "Feiras"}
    else{ this.PREFERENCIA.splice(5) }
    if(this.PREFERENCIA[6] == 1){this.PREFERENCIA[6] = "Outros"}
    else{ this.PREFERENCIA.splice(6) }
    this.toast.create({
      message: "Aguarde enquanto configuramos sua conta...",
      duration: 6000,
      position: "top"
    }).present();
    this.usersService.cadastro(this.NICKNAME_CLIENTE, this.NOME_CLIENTE, this.SOBRENOME_CLIENTE, this.password, this.EMAIL_CLIENTE, this.CIDADE_CLIENTE, this.DT_NASCIMENTO_CLIENTE, this.PREFERENCIA)
      .subscribe(
        () => {
          this.usersService.authentication(this.EMAIL_CLIENTE, this.password).subscribe(
            (dados: any) => {
              if (JSON.stringify(dados).length != 0) {
                this.navCtrl.setRoot(TabsPage);
                this.navCtrl.push(HomePage);
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
                  message: "Erro na Autenticação!",
                  duration: 3000,
                  position: "top"
                }).present();
                this.navCtrl.push(WelcomePage, {}, { animate: false });
              }
            }, error => {
              this.toast.create({
                message: "Erro na Autenticação!",
                duration: 3000,
                position: "top"
              }).present();
              this.navCtrl.push(WelcomePage, {}, { animate: false });
            }
          ),
            () => {
              this.toast.create({
                message: "Erro, tente novamente!",
                duration: 3000,
                position: "top"
              }).present();
            }
        }
      )
  }
}