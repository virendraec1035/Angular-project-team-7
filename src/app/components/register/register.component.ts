
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { RegisterService } from '../services/register.service';
import { User } from '../services/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  msg='';

  constructor(private _service : RegisterService, private _router : Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data =>{
      console.log("response recieved");
      this._router.navigate(['/login']);
  },
   error =>{
     console.log("Exception occured");
     this.msg=error.error;
   }

    )
  }
}
