import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from './../../shared/models/transaction.model';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {
  @Input() transaction: Transaction;
  cardVisible: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleCard() {
    this.cardVisible = !this.cardVisible;
  }

}
