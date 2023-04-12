import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
})

export class BankComponent {

  constructor( private http: HttpClient) {}

  ngOnInit(): void {
    this.getCuentas()
    
    
  }

  cuentas: any[] = [];
  
  getCuentas(){
    this.http.get('https://localhost:7118/api/v1/BankAccount/GetAll')
      .subscribe( ( resp : any ) => {
        this.cuentas = resp
        console.log(resp);
      });
  }
  deleteCuenta( numeroCuenta: number ){
    this.http.delete( `https://localhost:7118/api/v1/BankAccount/delete/${numeroCuenta}` )
      .subscribe( ( resp : any ) => {
        this.getCuentas();
        
    });
  }

}
