import { SideNavInterface } from '../../interfaces/side-nav.type';

export const ROUTES: SideNavInterface[] = [
  //admin
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
        data: { role: 'ADMIN' },
      },
      {
        path: 'admin/clients/add',
        title: 'Ajout Client',
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
        data: { role: 'ADMIN' },
      },
      {
        path: 'admin/users/add',
        title: 'Ajout Utilisateur',
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
    title: 'Demandes',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'book',
    data: {
      role: 'ADMIN',
    },
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
        data: { role: 'ADMIN' },
      },
    ],
  },
  //SUPERADMIN

  {
    path: 'admin/clients',
    title: 'Clients',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'user',
    data: {
      role: 'SUPERADMIN',
    },
    submenu: [],
  },
  {
    path: 'admin/demande',
    title: 'Demandes',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'user',
    data: {
      role: 'SUPERADMIN',
    },
    submenu: [],
  },

  //client
  {
    path: 'admin/profile',
    title: 'Profile',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'user',
    data: {
      role: 'CLIENT',
    },
    submenu: [],
  },
  {
    path: 'admin/enquette/solde',
    title: 'Solde enquette',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'user',
    data: {
      role: 'CLIENT',
    },
    submenu: [],
  },
  {
    path: '',
    title: 'Demande',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'user',
    data: {
      role: 'CLIENT',
    },
    submenu: [
      {
        path: 'admin/demande/client',
        title: 'Mes Demandes',
        iconType: 'nzIcon',
        icon: 'table',
        iconTheme: 'outline',
        submenu: [],
        data: { role: 'CLIENT' },
      },
      {
        path: 'admin/demande/client/add',
        title: 'Ajout Demande',
        iconType: 'nzIcon',
        icon: 'table',
        iconTheme: 'outline',
        submenu: [],
        data: { role: 'CLIENT' },
      },
    ],
  },
/*   {
    path: '',
    title: 'Télécharger enquette',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'user',
    data: {
      role: 'CLIENT',
    },
    submenu: [],
  },
 */
  //employee
  {
    path: 'admin/clients',
    title: 'Clients',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'user',
    data: {
      role: 'EMPLOYE',
    },
    submenu: [],
  },
  {
    path: 'admin/demande/employe',
    title: 'Demandes',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'user',
    data: {
      role: 'EMPLOYE',
    },
    submenu: [],
  },
];
