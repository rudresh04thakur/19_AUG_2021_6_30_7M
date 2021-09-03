import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AllService } from './all.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _ser:AllService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let loginLife = localStorage.getItem('isLogin') || '0'
      if(parseInt(loginLife)>=Date.now()){
        return true;
      }else{
        this._ser.updateNotification({msg:'Session expired, please login',error:'session'})
        localStorage.removeItem('isLogin')
        return false;
      }
      
  }
  
}
