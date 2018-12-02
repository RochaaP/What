import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


import { AngularFireAuth } from 'angularfire2/auth';

import { ShopDetailsPage } from '../shop-details/shop-details';
import { CreateAccountPage } from '../create-account/create-account';
/**
 * Generated class for the ShopOwnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-shop-owner',
  templateUrl: 'shop-owner.html',
})
export class ShopOwnerPage {

  @ViewChild ('email') email;
  @ViewChild ('password') password;



  constructor(
    public alertCtrl: AlertController,
    private fire: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopOwnerPage');
  }

  createAccount(){
    this.navCtrl.push(CreateAccountPage);
  }
  login(){
    this.fire.auth.signInWithEmailAndPassword(this.email.value,this.password.value)
    .then(data=>{
      this.navCtrl.push(ShopDetailsPage);
      console.log("ok");
    })
    .catch(error=>{
      const alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: error.message,
            buttons: ['OK']
          });
      alert.present();
    });
  }
  
}
