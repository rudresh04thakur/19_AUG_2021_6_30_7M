import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from '../all.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  constructor(private _fb: FormBuilder, private _ser: AllService, private _router: Router) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: ["gopal06thakur@gmail.com", Validators.required],
      password: ["Gopal@123", Validators.required]
    })
  }

  login(value: any) {
    this._ser.login(value).subscribe((res: any) => {
      this._ser.updateNotification(res);
      if (res['data'] != null) {
        let date: any = Date.now() + 86400000
        localStorage.setItem('isLogin', (date).toString())
        this._router.navigate(['/list'])
      }
    })
  }

}
