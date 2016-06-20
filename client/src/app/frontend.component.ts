import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { WidgetsComponent } from './+widgets/';
import { WidgetComponent } from './+widget/';
import { WidgetsService } from './widgets.service'

@Component({
  moduleId: module.id,
  selector: 'frontend-app',
  templateUrl: 'frontend.component.html',
  styleUrls: ['frontend.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [WidgetsService, ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/widgets', component: WidgetsComponent, name: 'Widgets'},
  {path: '/widgets/:id', component: WidgetComponent, name: 'Widget'}
])
export class FrontendAppComponent {
  title = 'Widgets!';

  constructor(private widgetsService: WidgetsService) { }

}
