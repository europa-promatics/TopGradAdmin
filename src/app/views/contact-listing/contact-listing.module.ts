import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactListingRoutingModule } from './contact-listing-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactListingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactListingModule { }
