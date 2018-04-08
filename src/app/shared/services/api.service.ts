import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

  protected static api_url: string = environment.api_url;
  protected static username: string = environment.username;
  protected static password: string = environment.password;
  protected static defaultHeaders: Headers = new Headers({
    'Content-Type': 'application/json', 
    'Authorization': 'Basic' + ' ' + btoa(ApiService.username + ':' + ApiService.password) 
  });

  protected static defaultOptions: RequestOptions = new RequestOptions(
    { headers: ApiService.defaultHeaders }
  );

  constructor() {}

  protected handleError(error: Response | any): Observable<any> {
    if (!environment.production) {
      console.error(error);
    }
    return Observable.throw(error.json());
  }
}
