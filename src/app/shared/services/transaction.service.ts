import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { Transaction } from './../models/transaction.model'

@Injectable()
export class TransactionService extends ApiService{

  constructor(private http: Http) {
    super();
  }

  getAll(): Observable<Array<Transaction>> {
    return this.http.get(ApiService.api_url, ApiService.defaultOptions)
      .map(res => res.json())
      .catch(super.handleError);
  }

}
