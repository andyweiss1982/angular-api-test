import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ClientAppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { WidgetsService } from './app/widgets.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(ClientAppComponent, [WidgetsService, HTTP_PROVIDERS]);
