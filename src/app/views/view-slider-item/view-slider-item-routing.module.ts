import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSliderItemComponent } from './view-slider-item.component';

const routes: Routes = [

	{
		path:'',
		component: ViewSliderItemComponent
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewSliderItemRoutingModule { }
