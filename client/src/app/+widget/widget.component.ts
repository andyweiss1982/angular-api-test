import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '../widgets.service';
import { RouteParams } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'app-widget',
  templateUrl: 'widget.component.html',
  styleUrls: ['widget.component.css']
})
export class WidgetComponent implements OnInit {
  constructor(
    private widgetsService: WidgetsService,
    private routeParams: RouteParams,
    public id: number,
    public widget: any
  ) {}

  ngOnInit() {
    if (this.routeParams.get('id') !== null) {
      let id = +this.routeParams.get('id');
      this.widgetsService.getWidget(id)
        .then(widget => this.widget = widget);
    }
  }

}
