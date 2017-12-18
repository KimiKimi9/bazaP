import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PrzestepcaComponent } from './przestepca/przestepca.component';


const firebaseConfig = {
  apiKey: 'AIzaSyAGPotv3CrPsj5UKZgkJ4785cwrRwQ79pg',
  authDomain: 'baza-przestepstw.firebaseapp.com',
  databaseURL: 'https://baza-przestepstw.firebaseio.com',
  projectId: 'baza-przestepstw',
  storageBucket: 'baza-przestepstw.appspot.com',
  messagingSenderId: '369265722251'

};

@NgModule({
  declarations: [
    AppComponent,
    PrzestepcaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule,
    FormsModule// And this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
