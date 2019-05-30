import { Component, OnInit } from '@angular/core';
import { PanelService } from './panel.service';
import { AlertAction } from './panel';

@Component({
  selector: 'srm-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  actions: Array<AlertAction>;

  constructor(private panelService: PanelService) { }

  ngOnInit() {

    this.panelService.getActions()
      .subscribe((actions) => {
        this.actions = actions;
      }, (err) => {
        console.error(err);
      })

  }

}
