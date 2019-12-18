import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
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
      var firebaseConfig = {
        apiKey: "AIzaSyB7KyRO0Mpk330RoncNcNDXgZ0-ShkzI40",
        authDomain: "tiebari-57275.firebaseapp.com",
        databaseURL: "https://tiebari-57275.firebaseio.com",
        projectId: "tiebari-57275",
        storageBucket: "tiebari-57275.appspot.com",
        messagingSenderId: "199817966622",
        appId: "1:199817966622:web:ab4e271485ee27bd8c6a0f",
        measurementId: "G-MGBQM35RD5"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

    });
  }
}
