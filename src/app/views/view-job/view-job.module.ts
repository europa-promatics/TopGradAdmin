

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { ViewJobComponent } from './view-job.component';
import { ViewJobRoutingModule } from './view-job-routing.module';


@NgModule({
  declarations: [
    ViewJobComponent
  ],
  imports: [
    CommonModule,
    EditorModule,
    MatSlideToggleModule,
    MatIconModule,
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule,CommonModule,
    EditorModule,
    MatSlideToggleModule,
    MatIconModule,
    NgxDropzoneModule,
    FormsModule,
    MatSortModule,
    ReactiveFormsModule,
    // MatFormFieldModule,
    MatPaginatorModule,
    BsDropdownModule.forRoot() ,
    ModalModule,
    MatFormFieldModule,
    MatTableModule,
    MatProgressBarModule,
    MatMenuModule,
    MatInputModule,
    ViewJobRoutingModule,

    MatCheckboxModule
  ],
  providers: [BsModalRef]
})
export class ViewJobModule { }

