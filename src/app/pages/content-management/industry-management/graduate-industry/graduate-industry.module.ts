

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EditorModule } from '@tinymce/tinymce-angular';
import { GraduateIndustryRoutingModule } from './graduate-industry-routing.module';
import { GraduateIndustryComponent } from './graduate-industry.component';


@NgModule({
  declarations: [
    GraduateIndustryComponent
  ],
  imports: [
    CommonModule,
    EditorModule,
    MatSlideToggleModule,
    MatIconModule,
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule,
    GraduateIndustryRoutingModule,
    // MatFormFieldModule,
    MatPaginatorModule,
    BsDropdownModule.forRoot() ,
    ModalModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTableModule,
    MatProgressBarModule,
    MatMenuModule,
    MatInputModule
  ],
providers: [BsModalRef]
})
export class GraduateIndustryModule { }

