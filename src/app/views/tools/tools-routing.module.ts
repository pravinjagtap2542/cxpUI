import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SoldtoUsersAssocComponent } from './soldto-users-assoc/soldto-users-assoc.component';
import { SoldtoLinkidAssocComponent } from './soldto-linkid-assoc/soldto-linkid-assoc.component';
import { SoldToAssocComponent } from './sold-to-assoc/sold-to-assoc.component';
import { SoldToUsersTransComponent } from './sold-to-users-trans/sold-to-users-trans.component';
import { SoldToLinkIdTransComponent } from './sold-to-link-id-trans/sold-to-link-id-trans.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'soldtoUsersAssoc',
    pathMatch: 'full'
  },
  {
    path: 'soldtoUsersAssoc',
    component: SoldtoUsersAssocComponent,
    data: {
      title: 'SoldTo Users Association'
    }
  },
  {
    path: 'soldtoLinkIdAssoc',
    component: SoldtoLinkidAssocComponent,
    data: {
      title: 'SoldTo Link ID Association'
    }
  },
  {
    path: 'soldToAssoc',
    component: SoldToAssocComponent,
    data: {
      title: 'Delete SoldTo Association'
    }
  },
  {
    path: 'soldToUsersTrans',
    component: SoldToUsersTransComponent,
    data: {
      title: 'Copy SoldTos - Users'
    }
  },
  {
    path: 'soldToLinkIdTrans',
    component: SoldToLinkIdTransComponent,
    data: {
      title: 'Copy SoldTos - Link IDS'
    }
  }
];


@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ToolsRoutingModule { }
