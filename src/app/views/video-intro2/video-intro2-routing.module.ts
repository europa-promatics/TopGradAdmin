import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoIntro2Component } from './video-intro2.component';

const routes: Routes = [

	{
		path:'',
		component: VideoIntro2Component
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoIntro2RoutingModule { }
