import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class JsonDateInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            const body = event.body;
            this.convert(body);
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

  convert(body: any) {
    if (body === null || body === undefined || typeof body !== 'object') {
      return body;
    }
    for (const key of Object.keys(body)) {
      const value = body[key];
      if (this.isIsoDateString(value)) {
        body[key] = new Date(value);
      } else if (typeof value === 'object') {
        this.convert(value);
      }
    }
  }
}
