import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OfferSubmissionsComponent } from './offer-submissions.component';

const routes: Routes = [

	{
		path:'',
		component: OfferSubmissionsComponent
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferSubmissionsRoutingModule { }
