import { Routes } from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {UserSpaceComponent} from './pages/backoffice/User/user-space/user-space.component';
import {AdminSpaceComponent} from './pages/backoffice/Admin/admin-space/admin-space.component';
import {ElectionPageComponent} from './pages/frontOffice/election-page/election-page.component';

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'election/:id', component: ElectionPageComponent},
  {path: 'user/:id', component: UserSpaceComponent},
  {path: 'admin/:id', component: AdminSpaceComponent},
];
