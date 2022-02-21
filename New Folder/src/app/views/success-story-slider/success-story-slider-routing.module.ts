import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessStorySliderComponent } from './success-story-slider.component';

const routes: Routes = [

	{
		path:'',
		component: SuccessStorySliderComponent
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuccessStorySliderRoutingModule { }
