import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllService } from '../all.service';

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
  constructor(private _fb:FormBuilder,private _ser:AllService) {
  
   }

  registerForm: any;
  ngOnInit(): void {
    this.registerForm = this._fb.group({
      name:["",[Validators.required,Validators.pattern('[A-Za-z]{3,}[ ]{1}[A-Za-z]{3,}')]],
      email:["",[Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]],
      mobile:["",[Validators.required,Validators.pattern('[0-9]{10}')]],
      password:["",[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})')]]
    })
  }

  //get regForm() { return this.registerForm.controls; }

  // A -- network problem(success error coplete) -- server ---- response 3.40 --- success error
  // B ---- server ---- response 2.50 --- success error
  // C ---- server ---- response 5.00 --- success error


  register(value:any){
    //console.log("Register data ",value)
   
    this._ser.register(value).subscribe((res:any)=>{
      //console.log("response ",res);
      this._ser.updateNotification(res);
    })
  }

}
