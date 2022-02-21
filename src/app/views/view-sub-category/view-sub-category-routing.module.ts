import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSubCategoryComponent } from './view-sub-category.component';

const routes: Routes = [
	{
		path:'',
		component: ViewSubCategoryComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewSubCategoryRoutingModule { }
