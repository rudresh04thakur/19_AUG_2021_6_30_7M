import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AllService } from '../all.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm:any;
  constructor(
    private _ar:ActivatedRoute,
    private _ser:AllService,
    private _fb:FormBuilder,
    private _router:Router) { 
    }
  currentUser="";
  @ViewChild('passwordInput')
  pwd!: ElementRef;

  ngOnInit(): void {
    this.editForm = this._fb.group({
      name:["",[Validators.required,Validators.pattern('[A-Za-z]{3,}[ ]{1}[A-Za-z]{3,}')]],
      email:["",[Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]],
      mobile:["",[Validators.required,Validators.pattern('[0-9]{10}')]],
      password:["",[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})')]],
      age:[1,[Validators.required,Validators.pattern('[0-9]{1,3}'),Validators.max(100),Validators.min(1)]],
      status:["0",[Validators.required]]
    })


    this.currentUser = this._ar.snapshot.params.id
    this._ser.getUserById(this.currentUser).subscribe((res:any)=>{
      this.editForm.patchValue(res['data']);
    })
  }

  update(data:any,id:any=this.currentUser){
    this._ser.updateUser(id,data).subscribe((res:any)=>{
      this._ser.updateNotification(res);
      this._router.navigate(['list'])
    })
  }

  togglePassword(){
    if(this.pwd.nativeElement.getAttribute('type')==='text'){
      this.pwd.nativeElement.setAttribute('type','password')
      let fa = this.pwd.nativeElement.parentNode.querySelector('i')
      fa.setAttribute('class','fa fa-eye')
    }else{
      this.pwd.nativeElement.setAttribute('type','text')
      let fa = this.pwd.nativeElement.parentNode.querySelector('i')
      fa.setAttribute('class','fa fa-eye-slash')
    }
  }

}
