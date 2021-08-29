import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesRoutingModules } from './pages/pages-routing.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), PagesRoutingModules],
  exports: [RouterModule],
})
export class AppRoutingModule {}
