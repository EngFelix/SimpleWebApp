import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class JsonDateInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'POST' || req.method === 'PUT') {
      const body = Object.assign({}, req.body);
      this.convertDatesToJSON(body);
      req = req.clone({body});
      console.log(req);
    }
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            const body = event.body;
            this.convertDatesFromJSON(body);
          }
          return event;
        }
      ) //map
    ); //pipe
  }

  private readonly _isoDateTimeFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?Z$/;
  private readonly _isoDateFormat = /^\d{4}-\d{2}-\d{2}$/;

  isIsoDateString(value: any): boolean {
    if (value === null || value === undefined) {
      return false;
    }
    if (typeof value === 'string') {
      return this._isoDateFormat.test(value) || this._isoDateTimeFormat.test(value);
    }
    return false;
  }

  convertDatesFromJSON(body: any) {
    if (body === null || body === undefined || typeof body !== 'object') {
      return body;
    }
    for (const key of Object.keys(body)) {
      const value = body[key];
      if (this.isIsoDateString(value)) {
        body[key] = new Date(value);
      } else if (typeof value === 'object') {
        this.convertDatesFromJSON(value);
      }
    }
  }

  convertDatesToJSON(body: any) {
    if (body === null || body === undefined || typeof body !== 'object') {
      return body;
    }
    for (const key of Object.keys(body)) {
      const value = body[key];
      if (value instanceof Date) {
        const isoDate = value.toISOString();
        body[key] = isoDate.substring(0, isoDate.indexOf('T'));
      } else if (typeof value === 'object') {
        this.convertDatesFromJSON(value);
      }
    }
  }
}
