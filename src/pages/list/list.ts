import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LampPage } from '../lamp/lamp';
import { LampData } from '../../providers/lamp-data';
import { FormControl } from '@angular/forms';
import { SplashScreen } from '@ionic-native/splash-screen';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public lamps: any[] = [];

  public isSearchInProgress: boolean = false;
  public searchTerm: string = '';
  public searchControl: FormControl;

  constructor(public navCtrl: NavController, private lampData: LampData, private splashScreen: SplashScreen) {
    this.lamps = this.lampData.getList(null);

    this.searchControl = new FormControl();
  }

  onSearchInput() {
    this.isSearchInProgress = true;
  }

  ionViewDidLoad() {
    this.searchControl.valueChanges.debounceTime(300).subscribe(search => {
      this.updateLampsList(search);
      this.isSearchInProgress = false;
    });
  }

  ionViewDidEnter() {
    this.splashScreen.hide();
  }

  lampClicked(upc: string, offset: number) {
    this.navCtrl.push(LampPage, {upc: upc, offset: offset});
  }

  private updateLampsList(searchString: string) {
    this.lamps = this.lampData.getList(searchString);
  }
}
