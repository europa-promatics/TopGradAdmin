import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessPrivilegeComponent } from './access-privilege.component';

const routes: Routes = [

	{
		path:'',
		component: AccessPrivilegeComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessPrivilegeRoutingModule { }
