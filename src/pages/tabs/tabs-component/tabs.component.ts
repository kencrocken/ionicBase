import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomeComponent } from '../../home/home-component/home.component';
import { SettingsComponent } from '../../settings/settings-component/settings.component';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsComponent {

  tab1Root: any = HomeComponent;
  tab2Root: any = SettingsComponent;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
