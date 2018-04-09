import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';
import { TransactionService } from './shared/services/transaction.service'
import { EnumToArrayPipe } from './shared/pipes/enum-to-array.pipe'

@NgModule({
  declarations: [
    AppComponent,
    TransactionDetailComponent,
    TransactionListComponent,
    EnumToArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
