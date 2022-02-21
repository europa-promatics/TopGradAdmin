import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSubAdminComponent } from './edit-sub-admin.component';

const routes: Routes = [
	{
		path:'',
		component: EditSubAdminComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSubAdminRoutingModule { }
