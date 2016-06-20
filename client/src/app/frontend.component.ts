import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


@Component({
  moduleId: module.id,
  selector: 'frontend-app',
  templateUrl: 'frontend.component.html',
  styleUrls: ['frontend.component.css']
})
export class FrontendAppComponent {
  title = 'frontend works!';
}
