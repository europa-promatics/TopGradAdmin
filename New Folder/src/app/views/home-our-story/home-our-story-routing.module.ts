import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  HomeOurStoryComponent } from './home-our-story.component';

const routes: Routes = [

	{
		path: '',
		component: HomeOurStoryComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeOurStoryRoutingModule { }
