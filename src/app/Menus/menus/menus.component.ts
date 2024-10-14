import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menus',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css'
})
export class MenusComponent implements OnInit{

  ngOnInit(): void {
  }

  customers = [
    {
      name: 'John Doe',
      contact: '+1 123-456-7890',
      company: 'Tech Solutions Inc.',
      status: 'Interview Scheduled',
      technology: 'Angular'
    },
    {
      name: 'Jane Smith',
      contact: '+1 987-654-3210',
      company: 'Innovative Tech LLC',
      status: 'Passed',
      technology: 'React'
    },
    {
      name: 'Samuel Green',
      contact: '+1 555-123-4567',
      company: 'WebWorks Co.',
      status: 'Rejected',
      technology: 'Vue.js'
    },
    {
      name: 'Linda Brown',
      contact: '+1 444-678-9012',
      company: 'Code Crafters Ltd.',
      status: 'Pending',
      technology: 'Node.js'
    },
    {
      name: 'Michael Johnson',
      contact: '+1 333-789-4560',
      company: 'Software Innovators',
      status: 'Offer Made',
      technology: 'ASP.NET'
    }
  ];
}
