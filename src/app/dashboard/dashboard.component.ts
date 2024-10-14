import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Router } from '@angular/router';
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule, LoginComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  constructor(private Router : Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  Login(){
    this.Router.navigate(['Login']);
  }

}
