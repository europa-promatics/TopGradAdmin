import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferManagementComponent } from './offer-management.component';

const routes: Routes = [
	{
		path:'',
		component: OfferManagementComponent
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferManagementRoutingModule { }
