import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MenusComponent } from "../Menus/menus/menus.component";

@Component({
  selector: 'app-menu-dash',
  standalone: true,
  imports: [SharedModule, CommonModule, MenusComponent],
  templateUrl: './menu-dash.component.html',
  styleUrl: './menu-dash.component.css'
})
export class MenuDashComponent implements OnInit {

  items: MenuItem[] = [];

  activeItem: MenuItem | undefined;

  activeTab: string = 'dashboard'; // Default tab

    setActiveTab(tab: string) {
        this.activeTab = tab;
    }


  

  ngOnInit(): void {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home' },
      { label: 'Transactions', icon: 'pi pi-chart-line' },
      { label: 'Products', icon: 'pi pi-list' },
    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }

}
