import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LampData } from '../../providers/lamp-data';
import { Lamp } from '../../models/lamp';

@Component({
  selector: 'page-lamp',
  templateUrl: 'lamp.page.html',
  styleUrls: ['lamp.page.scss']
})
export class LampPage {

  public lamp: Lamp;

  private paramSub: any;

  constructor(private route: ActivatedRoute, private lampData: LampData) {}

  ngOnInit() {
    this.paramSub = this.route.params.subscribe(params => {
      const upc = params['upc'];
      const offset = params['offset'];

      this.lamp = this.lampData.getLamp(upc, offset);
    });
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe();
  }
}
