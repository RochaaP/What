import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CustomerPage } from '../customer/customer';
import { ShopOwnerPage } from '../shop-owner/shop-owner';
// import { LocationPage } from '../location/location';

/**
 * Generated class for the SelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPage');
  }

  forCustomer(){
    this.navCtrl.push(CustomerPage);
  }

  forShopOwner(){
    this.navCtrl.push(ShopOwnerPage);
  }





}
