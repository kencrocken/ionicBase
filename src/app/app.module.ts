import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { SharedModule } from './shared/shared.module'

import { TabsModule } from '../pages/tabs/tabs.module';
import { HomeModule } from '../pages/home/home.module';
import { AccountModule } from '../pages/account/account.module';
import { SettingsModule } from '../pages/settings/settings.module';
import { BlogModule } from '../pages/blog/blog.module';
// import { PostModule } from '../pages/post/post.module';
// import { FeaturedMediaModule }from '../pages/featured-media/featured-media.module'

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SharedModule,
    HomeModule,
    TabsModule,
    SettingsModule,
    AccountModule,
    BlogModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
