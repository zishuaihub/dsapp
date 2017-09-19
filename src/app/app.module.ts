import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MakemoneyPage} from "../pages/makemoney/makemoney";
import {PersonalPage} from "../pages/personal/personal";
import { DataProvider } from '../providers/data/data';
import {HttpModule} from "@angular/http";
import {MessagePage} from "../pages/message/message";
import {NavPage} from "../pages/nav/nav";
import {CategoryPage} from "../pages/category/category";
import {GoodsitemsPage} from "../pages/goodsitems/goodsitems";
import {MenuPage} from "../pages/menu/menu";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MakemoneyPage,
    PersonalPage,
    MessagePage,
    NavPage,
    CategoryPage,
    GoodsitemsPage,
    MenuPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MakemoneyPage,
    PersonalPage,
    MessagePage,
    NavPage,
    CategoryPage,
    GoodsitemsPage,
    MenuPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
  ]
})
export class AppModule {}
