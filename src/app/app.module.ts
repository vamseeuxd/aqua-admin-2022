import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {IonicModule} from '@ionic/angular';
import {IonicStorageModule} from '@ionic/storage';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {FormsModule} from '@angular/forms';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    provideFirebaseApp(() => initializeApp({
      apiKey: 'AIzaSyDXxViFM-TCNghayNmaTUvulxWA7G6O7fI',
      authDomain: 'aqua-admins.firebaseapp.com',
      projectId: 'aqua-admins',
      storageBucket: 'aqua-admins.appspot.com',
      messagingSenderId: '118625429177',
      appId: '1:118625429177:web:be9ce865a5f4144e8cdd68'
    })),
    provideFirestore(() => getFirestore()),
  ],
  declarations: [AppComponent],
  providers: [InAppBrowser, SplashScreen, StatusBar],
  bootstrap: [AppComponent]
})
export class AppModule {
}
