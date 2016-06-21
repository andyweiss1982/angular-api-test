import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { WidgetsComponent } from './+widgets/';
import { WidgetComponent } from './+widget/';
import { HomeComponent } from './+home/';
import { WidgetsService } from './widgets.service'

@Component({
  moduleId: module.id,
  selector: 'client-app',
  templateUrl: 'client.component.html',
  styleUrls: ['client.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [WidgetsService, ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/widgets', component: WidgetsComponent, name: 'Widgets'},
  {path: '/widgets/:id', component: WidgetComponent, name: 'Widget'},
  {path: '/home', component: HomeComponent, name: 'Home'}
])
export class ClientAppComponent {
  title = 'Widgets!';

  constructor(private widgetsService: WidgetsService) { }

}
