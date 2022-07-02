import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { EditGraduateHowItWorksRoutingModule } from './edit-graduate-how-it-works-routing.module';
import { EditGraduateHowItWorksComponent } from './edit-graduate-how-it-works.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditGraduateHowItWorksComponent
  ],
  imports: [
    CommonModule,
    EditorModule,
    MatSlideToggleModule,
    MatIconModule,
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule,
    EditGraduateHowItWorksRoutingModule
  ]
})
export class EditGraduateHowItWorksModule { }
