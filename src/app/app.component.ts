import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AllService } from './all.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('fadeAnimation',[
      state('in',style({opacity:1})),

      transition(':enter',[
        style({opacity:0}),
        animate(600)
      ]),

      transition(':leave',
      animate(600,style({opacity:0}))
      ),
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'client';
  notification:any
  constructor(private _ser:AllService){}

  ngOnInit(){
    this._ser.currentNotification.subscribe((notification)=>{
      this.notification = notification;
      //console.log(Object.keys(this.notification).length)
      setTimeout(()=>{
        this.closeAlert()
        //this._ser.updateNotification({'massage':'','class':''});
      },5000)
    })
  }
  closeAlert(){
    // this._ser.updateNotification({});
    this._ser.updateNotification({'msg':'','error':null});
  }
}
