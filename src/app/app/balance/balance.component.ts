import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
})
export class BalanceComponent {

  constructor( private http: HttpClient) {}

  public numeroCuenta: any = "";
  cuenta: any = {};

  getByAccountNumber(){
    this.http.get(`https://localhost:7118/api/v1/BankAccount/GetByAccountNumber/${this.numeroCuenta}`)
      .subscribe( ( resp : any ) => {
        this.cuenta = resp
        console.log(resp);
      });
  }

}
