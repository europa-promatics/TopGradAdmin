import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { ViewSubHeadingRoutingModule } from './view-sub-heading-routing.module';
import { ViewSubHeadingComponent } from './view-sub-heading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';


@NgModule({
  declarations: [
    ViewSubHeadingComponent
  ],
  imports: [
    
    CommonModule,
    ViewSubHeadingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    EditorModule,
  ]
})
export class ViewSubHeadingModule {}

