import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'User Profile',
    url: '/user-profile',
    icon: 'icon-user',
    children: [
      {
        name: 'Edit My Profile',
        url: 'user-profile/editMyProfile',
        icon: 'icon-user'
      },
      {
        name: 'Manage My Sold Tos',
        url: '/user-profile/manageMySoldTos',
        icon: 'icon-puzzle'
      },
      {
        name: 'Link ID - Customer ID Association',
        url: '/user-profile/linkCustAssoc',
        icon: 'icon-puzzle'
      },
      {
        name: 'E Notification',
        url: '/user-profile/eNotification',
        icon: 'icon-puzzle'
      },
      {
        name: 'Push Notification',
        url: '/user-profile/pushNotification',
        icon: 'icon-bell'
      },
    ]
  },
  // {
  //   name: 'User Management',
  //   url: '/user-management',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Edit My Profile',
  //       url: '/base/cards',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Manage My Sold Tos',
  //       url: '/base/cards',
  //       icon: 'icon-puzzle'
  //     },
  //   ]
  // },
  // {
  //   name: 'Search',
  //   url: '/search',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Edit My Profile',
  //       url: '/base/cards',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Manage My Sold Tos',
  //       url: '/base/cards',
  //       icon: 'icon-puzzle'
  //     },
  //   ]
  // },
  // {
  //   name: 'Tools',
  //   url: '/tools',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Edit My Profile',
  //       url: '/base/cards',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Manage My Sold Tos',
  //       url: '/base/cards',
  //       icon: 'icon-puzzle'
  //     },
  //   ]
  // },
];
