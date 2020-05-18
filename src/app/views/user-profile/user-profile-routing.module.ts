import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMyProfileComponent } from './edit-my-profile/edit-my-profile.component';
import { ManageMySoldTosComponent } from './manage-my-sold-tos/manage-my-sold-tos.component';
import { LinkCustAssocComponent } from './link-cust-assoc/link-cust-assoc.component';
import { ENotificationsComponent } from './e-notifications/e-notifications.component';
import { PushNotificationsComponent } from './push-notifications/push-notifications.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'editMyProfile',
    pathMatch: 'full'
  },
  {
    path: 'editMyProfile',
    component: EditMyProfileComponent,
    data: {
      title: 'Edit My Profile'
    },
  },
  {
    path: 'manageMySoldTos',
    component: ManageMySoldTosComponent,
    data: {
      title: 'Manage My Sold Tos'
    },
  },
  {
    path: 'linkCustAssoc',
    component: LinkCustAssocComponent,
    data: {
      title: 'Link ID - Customer ID Association'
    },
  },
  {
    path: 'eNotification',
    component: ENotificationsComponent,
    data: {
      title: 'E Notification'
    },
  },
  {
    path: 'pushNotification',
    component: PushNotificationsComponent,
    data: {
      title: 'Push Notification'
    },
  }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class UserProfileRoutingModule { }


