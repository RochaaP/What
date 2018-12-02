import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

// import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs';

/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {

 
  arrdata;
  // shoppingList=[];
  // values;
  // shoppingListRef: Observable<any[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private database: AngularFireDatabase ) {

      // this.shoppingListRef = this.database.list('Shops').valueChanges();
      // this.database.list('Shops').valueChanges().subscribe((data=>{
      //   console.log(data);
      // }))
      // console.log(this.shoppingListRef$);
      // this.database.list('Shops').valueChanges().subscribe(data=>{
      // this.arrdata = data;
      // console.log(this.arrdata);
    // })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');

  //   const personRef: firebase.database.Reference = firebase.database().ref('/Shops/${data.uid}');
  //   personRef.on('value', personSnapshot => {
  //     this.shopNames = personSnapshot.val();
  // });
  // Loop through users in order with the forEach() method. The callback
// provided to forEach() will be called synchronously with a DataSnapshot
// for each child:
    // var query = firebase.database().ref("Shops").orderByKey();
    // query.once("value")
    //   .then(function(snapshot) {
    //     snapshot.forEach(function(childSnapshot) {
          
    //       var key = childSnapshot.key;
    //       // childData will be the actual contents of the child
    //       var childData = childSnapshot.val();
    //       // this.shopNames = childData;
    //       console.log(childData)
    //     });
    //   });
  
    var database = firebase.database();
    var ref = database.ref('Shops');
    ref.on('value', gotData, errData)

  }
  
}

    function gotData(data,values){
      // console.log(data.val());
      // this.shoppingList = data.val();
      // console.log(this.shoppingList);
      var shops = data.val();
      var keys = Object.keys(shops);
      
      for(var i=0;i<keys.length;i++){
        var k = keys[i];
        values= shops[k].Shopss;
            
        console.log(values);
       
      }
    }
    function errData(err){
      console.log(err);
    }

