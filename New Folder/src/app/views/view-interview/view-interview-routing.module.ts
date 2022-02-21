import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewInterviewComponent } from './view-interview.component';

const routes: Routes = [

	{
		path: '',
		component: ViewInterviewComponent
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewInterviewRoutingModule { }
