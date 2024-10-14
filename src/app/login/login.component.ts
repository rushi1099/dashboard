import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import {FormGroup, FormControl} from '@angular/forms';
import { Password } from 'primeng/password';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private Router : Router){}
  value: string = "Login";
  
  loginform = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')

    }
  ) 

  createform=new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })
  
  show(value: any) {
    this.value = value;
  }

  Login() {

    // this.Router.navigate(['/Menu']);
    const username = this.loginform.get('username')?.value;
    const password = this.loginform.get('password')?.value;
  
    if (username === "admin" && password === "1234") {
      console.log("Login successful");
      this.Router.navigate(['/Menu']);
    } else {
      console.log("Login failed: Invalid username or password");
    }
  }
  
}
