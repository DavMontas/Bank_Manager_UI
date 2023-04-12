import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './app/bank/bank.component';
import { AddComponent } from './app/add/add.component';
import { BalanceComponent } from './app/balance/balance.component';
import { TransactionComponent } from './app/transaction/transaction.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {path: "", component: BankComponent},
      {path: "add", component: AddComponent},
      {path: "balance", component: BalanceComponent},
      {path: "transaction", component: TransactionComponent},

    ]},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
