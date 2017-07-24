import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsComponent } from '../pages/tabs/tabs-component/tabs.component';
import { AccountComponent } from '../pages/account/account-component/account.component';
import { PostsComponent } from '../pages/blog/posts-component/posts.component';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = TabsComponent;

  pages: Array<{title: string, component: any}>;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private menuController: MenuController
   ){
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HomePage', component: TabsComponent },
      { title: 'Account', component: AccountComponent },
      { title: 'Blog', component: PostsComponent }
    ];

  }
  openPage(page) {
    this.menuController.close();
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
