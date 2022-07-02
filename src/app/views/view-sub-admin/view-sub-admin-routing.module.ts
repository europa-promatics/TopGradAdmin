import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSubAdminComponent } from './view-sub-admin.component';

const routes: Routes = [
	{
		path:'',
		component: ViewSubAdminComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewSubAdminRoutingModule { }
