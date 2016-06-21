import { Component, OnInit } from '@angular/core';
import { WidgetComponent } from '../+widget/';
import { WidgetsService } from '../widgets.service';
import { Router } from '@angular/router-deprecated';
import { Widget } from '../models/widget';

@Component({
  moduleId: module.id,
  selector: 'app-widgets',
  templateUrl: 'widgets.component.html',
  styleUrls: ['widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  widgets: Widget[];
  error: any;
  widget = new Widget;

  constructor(
    private widgetsService: WidgetsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getWidgets();
  }

  getWidgets() {
    this.widgetsService.getWidgets().then(widgets => this.widgets = widgets);
  }

  gotoDetail(widget: Widget) {
    let link = ['Widget', { id: widget.id }];
    this.router.navigate(link);
  }

  addWidget() {
    this.widgetsService
      .save(this.widget)
      .then(widget =>{
        this.widget = new Widget;
        this.getWidgets();
      })
      .catch(error => this.error = error);
  }

  delete(widget: Widget, event: any) {
    event.stopPropagation();
    this.widgetsService
      .delete(widget)
      .then(res => {
        this.widgets = this.widgets.filter(w => w !== widget);
      })
      .catch(error => this.error = error);
  }

}
