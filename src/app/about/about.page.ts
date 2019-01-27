import { Component } from '@angular/core';
import { LampData } from "../../providers/lamp-data";

@Component({
  selector: 'page-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {
  public totalLamps = 0;
  public latestUpdate = '1970-01-01';

  constructor(private lampData: LampData) {
    this.totalLamps = this.lampData.getTotalCount();
  }
}
