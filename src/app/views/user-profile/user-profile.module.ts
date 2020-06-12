import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileRoutingModule } from './user-profile-routing.module';

import { ManageMySoldTosComponent } from './manage-my-sold-tos/manage-my-sold-tos.component';
import { LinkCustAssocComponent } from './link-cust-assoc/link-cust-assoc.component';
import { ENotificationsComponent } from './e-notifications/e-notifications.component';
import { PushNotificationsComponent } from './push-notifications/push-notifications.component';

@NgModule({
  declarations: [ManageMySoldTosComponent, LinkCustAssocComponent, ENotificationsComponent, PushNotificationsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserProfileRoutingModule
  ],
})
export class UserProfileModule { }


