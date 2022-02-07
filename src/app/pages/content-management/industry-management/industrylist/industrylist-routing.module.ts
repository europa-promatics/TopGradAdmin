import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndustrylistComponent} from './industrylist.component'

const routes: Routes = [
  {
		path:'',
		component: IndustrylistComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustrylistRoutingModule { }
