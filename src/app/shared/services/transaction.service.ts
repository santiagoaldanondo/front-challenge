import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { Transaction } from './../models/transaction.model'

@Injectable()
export class TransactionService extends ApiService{

  protected static url: string = ApiService.api_url + "/transactions"

  constructor(private http: Http) {
    super();
  }

  getTransactions(action, currencyCode, orderBy): Observable<Array<Transaction>> {
    let params: URLSearchParams = new URLSearchParams();
    if (action) { 
      params.append('action', action);
    }
    if (currencyCode) {
      params.append('currencyCode', currencyCode);
    }
    if (orderBy) {
      params.append('orderBy', orderBy);
    }
    ApiService.defaultOptions.search = params;
    return this.http.get(TransactionService.url, ApiService.defaultOptions)
      .map(res => res.json())
      .catch(super.handleError);
  }

}
