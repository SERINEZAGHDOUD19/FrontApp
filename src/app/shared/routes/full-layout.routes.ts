import { Routes, RouterModule } from '@angular/router';

export const FullLayout_ROUTES: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../../authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];
