import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditInterviewComponent } from './edit-interview.component';

const routes: Routes = [

	{
		path: '',
		component: EditInterviewComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditInterviewRoutingModule { }
