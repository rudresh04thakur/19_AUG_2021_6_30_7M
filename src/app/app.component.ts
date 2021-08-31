import { Component, OnInit } from '@angular/core';
import { AllService } from './all.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  massage:any
  constructor(private _ser:AllService){}

  ngOnInit(){
    this._ser.currentMassage.subscribe((massage)=>{
      this.massage = massage;
      console.log(Object.keys(this.massage).length)
    })
  }
  closeAlert(){
    // this._ser.updateMassage({});
    this._ser.updateMassage({'massage':'','class':''});
  }
}
