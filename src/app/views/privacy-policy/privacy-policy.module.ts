import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PrivacyPolicyComponent } from './privacy-policy.component';

import { PrivacyPolicyRoutingModule } from './privacy-policy-routing.module';
//import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  //  FormsModule,ReactiveFormsModule,
    PrivacyPolicyRoutingModule
  ],
  providers: []
})
export class PrivacyPolicyModule { }
