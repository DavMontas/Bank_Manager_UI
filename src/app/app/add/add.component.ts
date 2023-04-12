import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {

  
  constructor( private http: HttpClient) {}

  public monto: number = 0;
  msg: string = "";
  cuenta: any = {};

  add(){
    this.http.post(`https://localhost:7118/api/v1/BankAccount/add?amount=${this.monto}`, 
    {
      amount: this.monto
    })
      .subscribe( ( resp : any ) => {
        this.cuenta = resp
        console.log(resp);
        this.msg = "Se ha añadido una nueva cuenta :D! "
      });
  }

}
