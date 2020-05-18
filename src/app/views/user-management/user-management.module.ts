import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { RegisterNewUserComponent } from './register-new-user/register-new-user.component';
import { ApprovalRequestComponent } from './approval-request/approval-request.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserManagementRoutingModule,
  ],
  declarations: [RegisterNewUserComponent, ApprovalRequestComponent],
})
export class UserManagementModule { }


