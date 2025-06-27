import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { JobsPage } from './pages/jobs/jobs.page';
import { ReportsPage } from './pages/reports/reports.page';
import { ProfilePage } from './pages/profile/profile.page';
import { SettingsPage } from './pages/settings/settings.page';
import { LoginPage } from './pages/login/login.page';
import { NotFoundPage } from './pages/not-found/not-found.page';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardPage },
      { path: 'jobs', component: JobsPage },
      { path: 'reports', component: ReportsPage },
      { path: 'profile', component: ProfilePage },
      { path: 'settings', component: SettingsPage },
    ],
  },
  { path: 'login', component: LoginPage },
  { path: '**', component: NotFoundPage },
];
