import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

import { LampTest } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ScanPage } from '../pages/scan/scan';
import { ListPage } from '../pages/list/list';
import { LampPage } from '../pages/lamp/lamp';
import { LampsSelectorPage } from '../pages/lamps-selector/lamps-selector';
import { TabsPage } from '../pages/tabs/tabs';

import { LampData } from '../providers/lamp-data';

@NgModule({
  declarations: [
    LampTest,
    AboutPage,
    ListPage,
    ScanPage,
    LampPage,
    TabsPage,
    LampsSelectorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(LampTest)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LampTest,
    AboutPage,
    ListPage,
    ScanPage,
    LampPage,
    TabsPage,
    LampsSelectorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LampData
  ]
})
export class AppModule {
}
