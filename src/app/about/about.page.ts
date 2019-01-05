import { Component } from '@angular/core';

@Component({
  selector: 'page-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {
  public totalLamps = 10;
  public latestUpdate = '1970-01-01';
}
