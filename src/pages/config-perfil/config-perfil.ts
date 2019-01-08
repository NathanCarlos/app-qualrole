import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { UsuariosServiceProvider } from '../../providers/usuarios-service/usuarios-service';

/**
 * Generated class for the ConfigPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config-perfil',
  templateUrl: 'config-perfil.html',
})
export class ConfigPerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioService: UsuariosServiceProvider, private toast: ToastController, private platform: Platform) {
  }
  private PREFERENCIA = [];
  private DESCRICAO_PREFENCIA;
  ionViewDidLoad() {
    this.usuarioService.findPerfil(localStorage.getItem('hashedid')).subscribe(
      (retorno: any) => {
        this.DESCRICAO_PREFENCIA = retorno.DESCRICAO_PREFENCIA;
      }, error => {
        console.log(error);
      }
    )
  }
  atualizar(){
    this.platform.runBackButtonAction();
    // this.usuarioService.updatePerfil(localStorage.getItem('hashedid'), this.DESCRICAO_PREFENCIA).subscribe(
    //   (retorno) => {
    //     this.toast.create({
    //       message: "Perfil de Busca Atualizado! Reinicie o App para atualizar seus dados locais.",
    //       duration: 3000,
    //       position: "top"
    //     }).present();
    //     localStorage.setItem('preferencia', this.DESCRICAO_PREFENCIA);
        
    //   }, error => {
    //     this.toast.create({
    //       message: "Ocorreu um erro ao Atualizar",
    //       duration: 2000,
    //       position: "top"
    //     }).present();
    //     console.log(error);
    //   }
    // )
  }

}
