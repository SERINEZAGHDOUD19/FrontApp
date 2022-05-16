import { SideNavInterface } from '../../interfaces/side-nav.type';
let role = localStorage.getItem('ROLE');
let menu = [];
let admin = [
  {
    path: '',
    title: 'Clients',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'user',
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
    icon: 'setting',
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
    icon: 'book',
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
      {
        path: 'admin/demande/add',
        title: 'Ajout demandes',
        iconType: 'nzIcon',
        icon: 'plus',
        iconTheme: 'outline',
        submenu: [],
        data: { role: 'ADMIN' },
      },
    ],
  },
  {
    path: '',
    title: 'Enquetes',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'question',
    data: { role: 'ADMIN' },

    submenu: [
      {
        path: 'admin/enquette',
        title: 'Liste des enquetes',
        iconType: 'nzIcon',
        icon: 'table',
        iconTheme: 'outline',
        submenu: [],
        data: {},
      },
    ],
  },
];
let client = [
  {
    path: '',
    title: 'Clients',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'user',
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
];
if (role == 'ADMIN') {
  menu = admin;
}else {
  menu = client
}
export const ROUTES: SideNavInterface[] = menu;
