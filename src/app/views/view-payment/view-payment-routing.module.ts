import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPaymentComponent } from './view-payment.component';

const routes: Routes = [
	{
		path:'',
		component: ViewPaymentComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewPaymentRoutingModule { }
