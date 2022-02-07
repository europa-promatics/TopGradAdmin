import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantsManagementComponent } from './applicants-management.component';

const routes: Routes = [
	{
		path:'',
		component: ApplicantsManagementComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantsManagementRoutingModule { }
