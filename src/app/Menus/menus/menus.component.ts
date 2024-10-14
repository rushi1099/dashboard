import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { DialogService,DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-menus',
  standalone: true,
  imports: [SharedModule, CommonModule],
  providers:[DialogService],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css'
})
export class MenusComponent implements OnInit{

  isModalVisible: boolean = false;
constructor(public dialogService: DialogService){

}
  ngOnInit(): void {
  }

  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }

  ref: DynamicDialogRef | undefined;

  // show() {
  //     this.ref = this.dialogService.open(AddComponent, {
  //         header: 'Add Details',
  //         width: '50vw',
  //         contentStyle: { overflow: 'auto' },
  //         breakpoints: {
  //             '960px': '75vw',
  //             '640px': '90vw'
  //         },
  //     });

  //     this.ref.onClose.subscribe((data: any) => {
  //     //     let summary_and_detail;
  //     //     if (data) {
  //     //         const buttonType = data?.buttonType;
  //     //         summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: `Pressed '${buttonType}' button` } : { summary: 'Product Selected', detail: data?.name };
  //     //     } else {
  //     //         summary_and_detail = { summary: 'No Product Selected', detail: 'Pressed Close button' };
  //     //     }
  //     //     this.messageService.add({ severity: 'info', ...summary_and_detail, life: 3000 });
  //     // });

  //     // this.ref.onMaximize.subscribe((value) => {
  //     //     this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
  //     });
  // }

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
