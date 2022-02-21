import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessagingReportsComponent } from './messaging-reports.component';

const routes: Routes = [
	
	{
		path:'',
		component: MessagingReportsComponent
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagingReportsRoutingModule { }
