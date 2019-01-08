import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { UsuariosServiceProvider } from '../../providers/usuarios-service/usuarios-service';
import { User } from '../../models/user';
import { HomePage } from '../home/home';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  private NICKNAME_CLIENTE;
  private password;
  private NOME_CLIENTE;
  private SOBRENOME_CLIENTE;
  private EMAIL_CLIENTE;
  private CIDADE_CLIENTE;
  private DT_NASCIMENTO_CLIENTE: Date;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private userService: UsuariosServiceProvider,
    private toast: ToastController,
    private platform: Platform) {
  }

  ionViewDidLoad() {
    this.userService.findById(localStorage.getItem('hashedid')).subscribe(
      (retorno: User) => {
        this.NICKNAME_CLIENTE = retorno.NICKNAME_CLIENTE,
          this.password = retorno.SENHA_CLIENTE,
          this.NOME_CLIENTE = retorno.NOME_CLIENTE,
          this.SOBRENOME_CLIENTE = retorno.SOBRENOME_CLIENTE,
          this.EMAIL_CLIENTE = retorno.EMAIL_CLIENTE,
          this.CIDADE_CLIENTE = retorno.CIDADE_CLIENTE,
          this.DT_NASCIMENTO_CLIENTE = retorno.DT_NASCIMENTO_CLIENTE
      }
    )
  }
  atualizar() {
    this.userService.update(this.NICKNAME_CLIENTE, this.NOME_CLIENTE, this.SOBRENOME_CLIENTE, this.password, this.EMAIL_CLIENTE, this.CIDADE_CLIENTE, this.DT_NASCIMENTO_CLIENTE)
      .subscribe((retorno) => {
        this.toast.create({
          message: "Informações Atualizadas com Sucesso! Reinicie o App para atualizar seus dados locais.",
          duration: 3000,
          position: "top"
        }).present();

        localStorage.setItem('nome', this.NOME_CLIENTE);
        localStorage.setItem('email', this.EMAIL_CLIENTE);
        localStorage.setItem('cidade_cliente', this.CIDADE_CLIENTE);
        localStorage.setItem('sobrenome', this.SOBRENOME_CLIENTE);
        localStorage.setItem('nickname', this.NICKNAME_CLIENTE);
        this.platform.runBackButtonAction();
      });
  }

}
