import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpManagementComponent } from './help-management.component';

const routes: Routes = [
	{
		path: '',
		component: HelpManagementComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpManagementRoutingModule { }
