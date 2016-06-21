import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '../widgets.service';
import { RouteParams } from '@angular/router-deprecated';
import { Widget } from '../models/widget';
import { Router } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'app-widget',
  templateUrl: 'widget.component.html',
  styleUrls: ['widget.component.css']
})
export class WidgetComponent implements OnInit {
  widget: Widget;
  error: any;

  constructor(
    private widgetsService: WidgetsService,
    private routeParams: RouteParams,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.routeParams.get('id') !== null) {
      let id = +this.routeParams.get('id');
      this.widgetsService.getWidget(id)
        .then(widget => this.widget = widget);
    }
  }

  save() {
    this.widgetsService
      .save(this.widget)
      .then(widget => {
        this.router.navigate(['Widgets']);
      })
      .catch(error => this.error = error); // TODO: Display error message
  }

}
