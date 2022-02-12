import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewHelpComponent } from './view-help.component';

const routes: Routes = [
	{
		path: '',
		component: ViewHelpComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewHelpRoutingModule { }
