import { Component, OnInit } from '@angular/core';
import { Transaction, Action, CurrencyCode } from './../../shared/models/transaction.model';
import { TransactionService } from './../../shared/services/transaction.service';
import { EnumToArrayPipe } from './../../shared/pipes/enum-to-array.pipe'

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Array<Transaction> = [];
  actionObject = Action;
  currencyCodeObject = CurrencyCode;
  action: Action | undefined = undefined;
  currencyCode: CurrencyCode | undefined = undefined;
  orderBy: string | undefined = undefined;
  noResults: Boolean = false;
  errorMessage;

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {}

  getTransactions() {
    this.transactionService.getTransactions(
      this.action, 
      this.currencyCode, 
      this.orderBy)
    .subscribe(
      transactions => {
        this.errorMessage = undefined
        this.transactions = transactions;
        if (transactions.length === 0) {
          this.noResults = true;
        } else {
          this.noResults = false;
        }
      },
      error => {
        this.errorMessage = error.message
      } 
    );
  }
}
