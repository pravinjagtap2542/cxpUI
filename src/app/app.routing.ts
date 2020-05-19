import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-profile',
    pathMatch: 'full'
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./views/user-profile/user-profile.module').then(m => m.UserProfileModule),
    data: {
      title: 'User Profile'
    },
  },
  {
    path: 'user-management',
    loadChildren: () => import('./views/user-management/user-management.module').then(m => m.UserManagementModule),
    data: {
      title: 'User Management'
    },
  },
  {
    path: 'search',
    loadChildren: () => import('./views/search/search.module').then(m => m.SearchModule),
    data: {
      title: 'Search'
    },
  },
  {
    path: 'tools',
    loadChildren: () => import('./views/tools/tools.module').then(m => m.ToolsModule),
    data: {
      title: 'Tools'
    },
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
