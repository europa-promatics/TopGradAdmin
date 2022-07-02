import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditFaqRoutingModule } from './edit-faq-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditFaqComponent } from './edit-faq.component';



@NgModule({
  declarations: [EditFaqComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditFaqRoutingModule
  ]
})
export class EditFaqModule { }
