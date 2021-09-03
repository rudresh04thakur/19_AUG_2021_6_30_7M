import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs'; //redux


const API_URL = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class AllService {
  
  constructor(private _http:HttpClient) {}

  //custom observable and subject
  private notification = new BehaviorSubject({'massage':'Welcome to angular site','class':'primary'})
  currentNotification = this.notification.asObservable(); //observable

  updateNotification(res:any){
    let cssClass = res['error']!=null?'danger':'success'
    this.notification.next({"massage":res['msg'],"class":cssClass})
  }

  public register(data:any){
    //localhost:3000/users/register
    return this._http.post(API_URL+'/users/register',data);

    // .pipe(map((res:any)=>{
    //   return res;
    // }))
  }

  public getUsers(){
    return this._http.get(API_URL+'/users');
  }

  public getUserById(id:any){
    return this._http.get(API_URL+'/users/'+id);
  }

  public updateUser(id:any,data:any){
    return this._http.put(API_URL+'/users/'+id,data);
  }

  public deleteUser(id:any){
    return this._http.delete(API_URL+'/users/'+id);
  }

  public login(data:any){
    return this._http.post(API_URL+'/users/login',data);
  }

}
