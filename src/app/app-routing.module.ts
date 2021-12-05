import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { PagesRoutingModules } from './pages/pages-routing.module';
import { PagesModule } from './pages/pages.module';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path:'', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes), PagesRoutingModules ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
