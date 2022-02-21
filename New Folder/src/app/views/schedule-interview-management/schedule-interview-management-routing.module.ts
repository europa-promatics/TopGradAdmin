import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleInterviewManagementComponent } from './schedule-interview-management.component';

const routes: Routes = [
	
	{
		path:'',
		component: ScheduleInterviewManagementComponent
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleInterviewManagementRoutingModule { }
