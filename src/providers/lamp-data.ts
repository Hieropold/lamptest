import { Injectable } from '@angular/core';
import { Lamp } from '../models/lamp';
import * as moment from 'moment';

declare let data: any;

@Injectable()
export class LampData {

  private list: any[] = [];
  private data: any = {};
  private latestUpdate: any;
  private totalLamps: number = 0;

  constructor() {
    this.latestUpdate = moment('1970-01-01');

    if (data) {
      for (let upc in data) {
        if (data.hasOwnProperty(upc)) {

          if (!this.data[upc]) {
            this.data[upc] = [];
          }

          for (let i = 0; i < data[upc].length; i++) {
            let lampData = data[upc][i];
            this.totalLamps++;

            // Convert entry into Lamp object
            let lamp = new Lamp();
            if (lamp.init(lampData)) {
              this.data[upc].push(lamp);
            }

            // Add entry into lamps list array
            let title = lampData.brand + ' ' + lampData.model;
            if (title) {
              this.list.push({
                title: title,
                upc: upc,
                offset: i,
                normalizedTitle: title.toLowerCase()
              });
            }

            // Update latest timestamp
            let testDate = moment(data[upc][i].test_date, 'DD.MM.YYYY');
            if (testDate > this.latestUpdate) {
              this.latestUpdate = testDate;
            }

          }
        }
      }
    }
  }

  getTotalCount() {
    return this.totalLamps;
  }

  getLatestUpdateString() {
    return this.latestUpdate.locale('ru').format('Do MMMM, YYYY');
  }

  getList(keyword: any) {
    if (typeof keyword === 'string' && keyword.length) {
      let normalizedKeyword = keyword.toLowerCase();
      return this.list.filter((listEntry) => {
        if (listEntry.normalizedTitle.indexOf(normalizedKeyword) !== -1) {
          return true;
        }
        return false;
      });
    }

    return this.list;
  }

  getLampsByUpc(upc: string) {
    if (!this.data[upc]) {
      return false;
    }

    return this.data[upc];
  }

  areLampsAvailableByUpc(upc: string) {
    if (!this.data[upc]) {
      return false;
    }

    return true;
  }

  getLamp(upc: string, offset: number) {
    if (!this.data[upc]) {
      return false;
    }
    if (!this.data[upc][offset]) {
      return false;
    }

    return this.data[upc][offset];
  }

  isLampAvailable(upc: string, offset: number) {
    if (!this.data[upc]) {
      return false;
    }
    if (!this.data[upc][offset]) {
      return false;
    }

    return true;
  }

}
