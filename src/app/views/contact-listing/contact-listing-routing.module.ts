import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListingComponent } from './contact-listing.component';

const routes: Routes = [
	{
		path: '',
		component: ContactListingComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactListingRoutingModule { }
