import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsManagementComponent } from './jobs-management.component';

const routes: Routes = [

	{
		path: '',
		component: JobsManagementComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsManagementRoutingModule { }
