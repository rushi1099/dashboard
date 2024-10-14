import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MenuDashComponent } from './menu-dash/menu-dash.component';
import { MenusComponent } from './Menus/menus/menus.component';

export const routes: Routes = [

    { path:'', component : DashboardComponent, children:[
            // {
            //     path:'Menu',
            //     component:MenuDashComponent
            // } 
            ]},
    { path:'Login', component:LoginComponent },
    { path:'Menu',component:MenuDashComponent },
    { path:'Menus', component :MenusComponent}
];
