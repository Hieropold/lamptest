import { Component } from '@angular/core';

import * as moment from 'moment';

declare let data: any;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  totalLamps: number;
  latestUpdate: any;

  constructor() {
    this.totalLamps = 0;
    this.latestUpdate = moment('1970-01-01');

    for (let upc in data) {
      if (data.hasOwnProperty(upc)) {
        for (let idx = 0; idx < data[upc].length; idx++) {
          this.totalLamps++;
          let testDate = moment(data[upc][idx].test_date, 'DD.MM.YYYY');
          if (testDate > this.latestUpdate) {
            this.latestUpdate = testDate;
          }
        }
      }
    }

    this.latestUpdate = this.latestUpdate.format('Do MMMM, YYYY');
  }

}
