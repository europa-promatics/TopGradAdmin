import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSliderItemComponent } from './add-slider-item.component';

const routes: Routes = [
	{
		path:'',
		component: AddSliderItemComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddSliderItemRoutingModule { }
