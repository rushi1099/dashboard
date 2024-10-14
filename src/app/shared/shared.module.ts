import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import {ReactiveFormsModule} from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    ToolbarModule,
    ButtonModule,
    ReactiveFormsModule,
    CardModule,
    TabMenuModule,
    TableModule,
    TabViewModule,
    FloatLabelModule,
    DynamicDialogModule
  ]
})
export class SharedModule {
 
 }
