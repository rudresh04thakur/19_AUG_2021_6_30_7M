import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  userList:any = []
  constructor(private _ser:AllService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  deleteUser(id:any){
    Swal.fire({
      title: 'Want to delete?',
      html: 'Once deleted, you will not be able to recover this data!',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
    }).then((result: any) => {
      if (result.value) {
        this._ser.deleteUser(id).subscribe((res:any)=>{
          this._ser.updateNotification(res);
          this.getUsers();
        })
      }
    })
  }

  getUsers(){
    this._ser.getUsers().subscribe((res:any)=>{
      this.userList = res['data'];
      this._ser.updateNotification(res)
    })
  }

}
