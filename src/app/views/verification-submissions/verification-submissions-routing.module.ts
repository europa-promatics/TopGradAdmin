import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificationSubmissionsComponent } from './verification-submissions.component';

const routes: Routes = [

	{
		path:'',
		component: VerificationSubmissionsComponent
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerificationSubmissionsRoutingModule { }
