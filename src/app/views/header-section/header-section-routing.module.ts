import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderSectionComponent } from './header-section.component';

const routes: Routes = [

	{
		path: '',
		component: HeaderSectionComponent
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderSectionRoutingModule { }
