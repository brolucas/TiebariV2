import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';
import { AccueilPage } from './accueil/accueil.page';
import { MenuController } from '@ionic/angular';
import { firebaseConfig } from './credential';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Connexion',
      url: '/accueil',
      icon: 'home'
    },
    {
      title: 'Inscription',
      url: '/inscription',
      icon: 'home'
    }
  ];
  constructor(
    private menu: MenuController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

    });
  }
}
