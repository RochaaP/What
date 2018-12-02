import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from  'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient, private fire: AngularFireAuth,private database : AngularFireDatabase) {

    console.log('Hello UserProvider Provider');
  }


  getUsername(){
  var userId = this.fire.auth.currentUser.uid;
  return this.database.database.ref(`/User/${userId}/Username/`).once('value').then((snapshot) =>{
    return snapshot.val() || 'Anoynymous';
  })




	}
}
