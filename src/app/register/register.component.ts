import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // /// using ngModel 

  // registerForm={
  //   name:"",
  //   email:"",
  //   mobile:"",
  //   password:""
  // }


  // /// using form builder
  constructor(private _fb:FormBuilder) {
  
   }

  registerForm: any;

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      name:["Gopal"],
      email:["gopal@ggmail.co"],
      mobile:["123"],
      password:["123e"]
    })
  }

  register(value:any){
    console.log("Register data ",value)
  }

}
