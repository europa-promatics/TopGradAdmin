import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { RecruitmentSolutionsManagementRoutingModule } from './recruitment-solutions-management-routing.module';
import { RecruitmentSolutionsManagementComponent } from './recruitment-solutions-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RecruitmentSolutionsManagementComponent
  
  ],
  imports: [
    CommonModule,
    EditorModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    RecruitmentSolutionsManagementRoutingModule
  ] 
})
export class RecruitmentSolutionsManagementModule { }
