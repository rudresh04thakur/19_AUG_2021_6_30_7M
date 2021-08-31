import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(value:any){
    console.log("Login value ",value)
  }

}
