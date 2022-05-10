import { SideNavInterface } from '../../interfaces/side-nav.type';
export const ROUTES: SideNavInterface[] = [
  /*   {
    path: 'admin/dashboard',
    title: 'Dashboard',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'dashboard',
    submenu: [],
  }, */
  {
    path: '',
    title: 'Clients',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'appstore',
    data: {
      role: 'ADMIN',
    },
    submenu: [
      {
        path: 'admin/clients',
        title: 'Liste des clients',
        iconType: 'nzIcon',
        icon: 'table',
        iconTheme: 'outline',
        submenu: [],
        data: {},
      },
      {
        path: 'admin/clients/add',
        title: 'Ajout Client',
        iconType: 'nzIcon',
        icon: 'plus',
        iconTheme: 'outline',
        submenu: [],
        data: {},
      },

    ],
  },
  {
    path: '',
    title: 'Utilisateurs',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'appstore',
    data: { role: 'ADMIN' },
    submenu: [
      {
        path: 'admin/users',
        title: 'Liste des Utilisateurs',
        iconType: 'nzIcon',
        icon: 'table',
        iconTheme: 'outline',
        submenu: [],
        data: {},
      },
      {
        path: 'admin/users/add',
        title: 'Ajout Utilisateur',
        iconType: 'nzIcon',
        icon: 'plus',
        iconTheme: 'outline',
        submenu: [],
        data: {},
      },
    ],
  },
  {
    path: '',
    title: 'Demandes',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'appstore',
    data: {},
    submenu: [
      {
        path: 'admin/demande',
        title: 'Liste des demandes',
        iconType: 'nzIcon',
        icon: 'table',
        iconTheme: 'outline',
        submenu: [],
        data: { role: 'ADMIN' },
      },
      /*     {
        path: 'admin/demande/add',
        title: 'Ajout demandes',
        iconType: 'nzIcon',
        icon: 'plus',
        iconTheme: 'outline',
        submenu: [],
      }, */
    ],
  },
  {
    path: '',
    title: 'Demandes',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'appstore',
    data: { role: 'ADMIN' },

    submenu: [
      {
        path: 'admin/demandes',
        title: 'Liste des demandes',
        iconType: 'nzIcon',
        icon: 'table',
        iconTheme: 'outline',
        submenu: [],
        data: {},
      },
      /*     {
        path: 'admin/demande/add',
        title: 'Ajout demandes',
        iconType: 'nzIcon',
        icon: 'plus',
        iconTheme: 'outline',
        submenu: [],
      }, */
    ],
  },
];