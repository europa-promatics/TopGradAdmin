import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubCategoryManagementComponent } from './sub-category-management.component';

const routes: Routes = [
	{
		path:'',
		component: SubCategoryManagementComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCategoryManagementRoutingModule { }
