import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsListComponent } from './skills-list.component';

const routes: Routes = [
	{
		path: '',
		component: SkillsListComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsListRoutingModule { }
