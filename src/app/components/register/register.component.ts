import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../services/user';
import { UsersService } from '../services/users.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  users:any=[];
  service:UsersService;

  constructor(service:UsersService){
    this.service=service;
  }


  onAddUsers(form:NgForm){
    const newUser:User={
      fullName: form.value.fullName,
      contactNo: form.value.contactNo,
      email: form.value.email,
      password: form.value.password,

    };
    this.service.addNewUsers(newUser).subscribe((responce)=>{
      console.log(responce);
    });

  }
}
