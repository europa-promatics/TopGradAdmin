import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  HowItWorkComponent } from './how-it-work.component';

const routes: Routes = [

	{
		path:'',
		component: HowItWorkComponent
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HowItWorkRoutingModule { }
