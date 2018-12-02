import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController   } from 'ionic-angular';

import { ShopOwnerPage } from '../shop-owner/shop-owner';
import { UserProvider } from '../../providers/user/user';

import { Validators, FormGroup, FormControl } from '@angular/forms';

import firebase from 'firebase';
import { AngularFireAuth } from  'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';



/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

  @ViewChild('username') username;
  @ViewChild('password') password;
  @ViewChild('shopname') shopname;
  @ViewChild('contact') contact;
  @ViewChild('email') email;

  

  create : FormGroup;
  

  key:any
  
  arrdata = []

  Uname=''
  Email=''
  Shopname=''
  Contact=''

  // public myPerson ={}
  public shopNames = {};

  constructor(
    private fire: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private database : AngularFireDatabase,
    public toastCtrl: ToastController,
    private userProvider : UserProvider ) {

      
    this.create = new FormGroup({
      user: new FormControl('',Validators.required),
      shop: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      pass: new FormControl('',Validators.compose([Validators.required, Validators.minLength(6)])),
      contact: new FormControl('',Validators.required)

    });

    // this.database.list("/User/").valueChanges().subscribe(data=>{
    //   this.arrdata = data;
    //   console.log(this.arrdata);
    // });

    // this.database.list("/Shops/").valueChanges().subscribe(data=>{
    //   this.arrData = data;

    //   console.log(this.arrData);
    // });
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  //   const personRef: firebase.database.Reference = firebase.database().ref('/Shops');
  //   personRef.on('value', personSnapshot => {
  //     this.shopNames = personSnapshot.val();
  // });
  // 
  }

  validation_messages = {
    'user': [
        { type: 'required', message: 'Username is required.' }
      ],
    'pass': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long..' }
    ],
    'shop': [
      { type: 'required', message: 'Shop name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' }
    ],
    'contact': [
      { type: 'required', message: 'Contact number is required.' }
    ],      
    
    }
  createAccount(){
    this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
    .then(data=>{
      const alert = this.alertCtrl.create({
        title:  'Hi ' +this.username.value,
        subTitle: 'Your account has created..' ,
        buttons: ['OK']
      });
      alert.present();  
      
    var key = firebase.database().ref("/User/").push().key;

    firebase.database().ref("/User").child(key).set({
      Username: this.username.value,
      Email: this.email.value,
      Shop: this.shopname.value,
      Contact: this.contact.value
    })
    firebase.database().ref("/Shops").child(key).set({
      Shopss : this.shopname.value
    });
      
      

      this.userProvider.getUsername()
      .then(username=>{
       console.log('Yeah, username ', username);
      })
      .catch(error=>{
      console.log('OOPS, error', error)
      })
      
        
     
      // this.navCtrl.push(ShopOwnerPage);

    })
    .catch(error=>{
      const alert = this.alertCtrl.create({
        title:  'error ',
        subTitle: error ,
        buttons: ['OK']
      });
      alert.present();
      console.log(error);
    })

   
  
  }

}
