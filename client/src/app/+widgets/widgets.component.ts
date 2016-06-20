import { Component, OnInit } from '@angular/core';
import { WidgetComponent } from '../+widget/';
import { WidgetsService } from '../widgets.service';
import { Router } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'app-widgets',
  templateUrl: 'widgets.component.html',
  styleUrls: ['widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  widgets: WidgetComponent[];
  selectedWidget: WidgetComponent;
  error: any;
  addingWidget = false;

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

  gotoDetail(widget: WidgetComponent) {
    let link = ['Widget', { id: widget.id }];
    this.router.navigate(link);
  }

  addWidget() {
    this.addingWidget = true;
    this.selectedWidget = null;
  }

  delete(widget: WidgetComponent, event: any) {
    event.stopPropagation();
    this.widgetsService
      .delete(widget)
      .then(res => {
        this.widgets = this.widgets.filter(w => w !== widget);
      })
      .catch(error => this.error = error); // TODO: Display error message
  }

}
