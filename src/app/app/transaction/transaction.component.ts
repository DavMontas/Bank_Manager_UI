import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
})
export class TransactionComponent {

  constructor( private http: HttpClient) {}

  public numeroCuentaFrom: any = "";
  public numeroCuentaTo: any = "";
  public monto: number = 0;
  cuenta: any = {};

  msg: string = ""

  transaccion(){
    this.http.post(`https://localhost:7118/api/v1/BankAccount/Transaction?accountFrom=${this.numeroCuentaFrom}&accountTo=${this.numeroCuentaTo}&amount=${this.monto}`, 
    {
      accountFrom: this.numeroCuentaFrom,
      accountTo: this.numeroCuentaTo,
      amount: this.monto
    })
      .subscribe( ( resp : any ) => {
        this.cuenta = resp
        console.log(resp);
        this.msg = 'La transaccion se ha realizado de manera exitosa! '
      });
  }
}
