import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from  'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'; 


// import { FirebaseApp } from '@firebase/app-types';
// import { FirebaseAuth } from '@firebase/auth-types';
// import { FirebaseDatabase } from '@firebase/database-types';
// import { FirebaseMessaging } from '@firebase/messaging-types';
// import { FirebaseStorage } from '@firebase/storage-types';
// import { FirebaseFirestore } from '@firebase/firestore-types';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SelectPage } from '../pages/select/select';
import { CustomerPage } from '../pages/customer/customer';
import { ShopOwnerPage } from '../pages/shop-owner/shop-owner';
import { ShopDetailsPage } from '../pages/shop-details/shop-details';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { UserProvider } from '../providers/user/user';



const firebaseAuth = {
  apiKey: "AIzaSyA0blbQ_SPH10V_o2BMBi2Aq7xRdfxrPVY",
  authDomain: "shoppinghackathon2018.firebaseapp.com",
  databaseURL: "https://shoppinghackathon2018.firebaseio.com",
  projectId: "shoppinghackathon2018",
  storageBucket: "",
  messagingSenderId: "196729625198"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectPage,
    CustomerPage,
    ShopOwnerPage,
    ShopDetailsPage,
    CreateAccountPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule, 
    HttpModule,HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SelectPage,
    CustomerPage,
    ShopOwnerPage,
    ShopDetailsPage,
    CreateAccountPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    HttpModule,
    HttpClientModule
    
  ]
})
export class AppModule {}
