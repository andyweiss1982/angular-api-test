import { Injectable } from '@angular/core';
import { WidgetComponent } from './+widget/';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WidgetsService {
  private widgetsUrl = 'api/widgets';
  constructor(private http: Http) { };

  getWidgets(): Promise<WidgetComponent[]> {
    return this.http.get(this.widgetsUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getWidget(id: number) {
    return this.getWidgets()
      .then(widgets => widgets.filter(widget => widget.id === id)[0]);
  }

  save(widget: WidgetComponent): Promise<WidgetComponent> {
    if (widget.id) {
      return this.put(widget);
    }
    return this.post(widget);
  }

  delete(widget: WidgetComponent) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.widgetsUrl}/${widget.id}`;

    return this.http
      .delete(url, headers)
      .toPromise()
      .catch(this.handleError);
  }

  // Add new Widget
  private post(widget: WidgetComponent): Promise<WidgetComponent> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.widgetsUrl, JSON.stringify(widget), { headers: headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  // Update existing Widget
  private put(widget: WidgetComponent) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.widgetsUrl}/${widget.id}`;

    return this.http
      .put(url, JSON.stringify(widget), { headers: headers })
      .toPromise()
      .then(() => widget)
      .catch(this.handleError);
  }


  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}