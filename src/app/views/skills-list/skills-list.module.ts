import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsListRoutingModule } from './skills-list-routing.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { EditorModule } from '@tinymce/tinymce-angular';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillsListComponent } from './skills-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    SkillsListComponent,
  ],
  imports: [
    CommonModule,
    EditorModule,
    MatSlideToggleModule,
    MatIconModule,
    SkillsListRoutingModule,
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule,CommonModule,
    EditorModule,
    MatSlideToggleModule,
    MatIconModule,
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule,
    // MatFormFieldModule,
    MatPaginatorModule,
    BsDropdownModule.forRoot() ,
    ModalModule,
    MatFormFieldModule,
    MatTableModule,
    MatProgressBarModule,
    MatMenuModule,
    MatInputModule
  ]
})
export class SkillsListModule { }





