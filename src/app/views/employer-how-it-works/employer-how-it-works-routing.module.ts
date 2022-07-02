import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerHowItWorksComponent } from './employer-how-it-works.component';

const routes: Routes = [
	{
		path:'',
		component: EmployerHowItWorksComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerHowItWorksRoutingModule { }
