import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllService } from '../all.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  user:any;
  constructor(private _ar:ActivatedRoute,private _ser:AllService) { }

  ngOnInit(): void {
    this._ser.getUserById(this._ar.snapshot.params.id).subscribe((res:any)=>{
      this._ser.updateNotification(res);
      this.user=res['data'];
    })
  }

}
