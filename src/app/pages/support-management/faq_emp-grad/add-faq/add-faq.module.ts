import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddFaqRoutingModule } from './add-faq-routing.module';
import { AddFaqComponent } from './add-faq.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [
    AddFaqComponent
  ],
  imports: [
    CommonModule,
    AddFaqRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule
  ]
})
export class AddFaqModule { }
