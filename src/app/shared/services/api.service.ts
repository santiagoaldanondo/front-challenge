import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  protected static api_url = environment.api_url;
  protected static username = environment.username;
  protected static password = environment.password;
  protected static defaultHeaders = new Headers({
    'Content-Type': 'application/json', 
    'Authorization': 'Basic' + ' ' + btoa(ApiService.username + ':' + ApiService.password) 
  });

  protected static defaultOptions = new RequestOptions({ headers: ApiService.defaultHeaders });

  constructor() {}

  protected handleError(error: Response | any): Observable<any> {
    if (!environment.production) {
      console.error(error);
    }
    return Observable.throw(error.json());
  }
}
