import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterNewUserComponent } from './register-new-user/register-new-user.component';
import { ApprovalRequestComponent } from './approval-request/approval-request.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'newUserRegistration',
    pathMatch: 'full'
  },
  {
    path: 'newUserRegistration',
    component: RegisterNewUserComponent,
    data: {
      title: 'Register New USer'
    }
  },
  {
    path: 'requestApproval',
    component: ApprovalRequestComponent,
    data: {
      title: 'Approval Request'
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }


