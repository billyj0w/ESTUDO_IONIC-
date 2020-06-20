import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public nomeCompleto : any = '';
  public email : any = '';
  public senha : any = '';

  constructor(public navCtrl: NavController, public alertCtrl : AlertController) {

  }
  Enviar (){
    let alert = this.alertCtrl.create({
      title: 'Bem vindo!',
      subTitle: "Nome Completo: " + this.nomeCompleto + "E-mail: " + this.email + "Senha: " + this.senha,
      buttons: ['Continuar']
    });
    alert.present();
  }
  Cancelar(){
    window.location.reload()
  }

}
