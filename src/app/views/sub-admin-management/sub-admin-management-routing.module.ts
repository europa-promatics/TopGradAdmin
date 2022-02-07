import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubAdminManagementComponent } from './sub-admin-management.component';
const routes: Routes = [

	{
		path:'',
		component: SubAdminManagementComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubAdminManagementRoutingModule { }
