import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraduateHowItWorksComponent } from './graduate-how-it-works.component';

const routes: Routes = [
	{
		path:'',
		component: GraduateHowItWorksComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraduateHowItWorksRoutingModule { }
