import { Component, OnInit } from '@angular/core';
import { Transaction } from './../../shared/models/transaction.model';
import { TransactionService } from './../../shared/services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions: Array<Transaction> = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
  }

  getAll() {
    this.transactionService.getAll().subscribe(
      transactions => this.transactions = transactions,
      error => console.log(error)
    );
  }

}
