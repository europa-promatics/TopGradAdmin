import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewVerificationComponent } from './view-verification.component';

const routes: Routes = [

	{
		path:'',
		component: ViewVerificationComponent
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewVerificationRoutingModule { }
