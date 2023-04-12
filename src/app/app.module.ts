import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankComponent } from './app/bank/bank.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { AddComponent } from './app/add/add.component';
import { BalanceComponent } from './app/balance/balance.component';
import { TransactionComponent } from './app/transaction/transaction.component';
import { MainComponent } from './app/main/main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BankComponent,
    NavbarComponent,
    AddComponent,
    BalanceComponent,
    TransactionComponent,
    MainComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,

    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
