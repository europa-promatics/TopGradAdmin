import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SomethingForEveryoneComponent } from './something-for-everyone.component';

const routes: Routes = [
	{
		path: '',
		component: SomethingForEveryoneComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SomethingForEveryoneRoutingModule { }
