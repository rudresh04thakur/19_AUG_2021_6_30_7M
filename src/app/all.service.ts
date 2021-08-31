import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';


const API_URL = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class AllService {
  
  constructor(private _http:HttpClient) {}

  //custom observable and subject
  private massage = new BehaviorSubject({'massage':'Welcome to angular site','class':'primary'})
  currentMassage = this.massage.asObservable();

  updateMassage(m:any){
    this.massage.next(m)
  }

  public register(data:any){
    //localhost:3000/users/register
    return this._http.post(API_URL+'/users/register',data);

    // .pipe(map((res:any)=>{
    //   return res;
    // }))
  }

}
