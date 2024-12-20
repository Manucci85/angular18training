import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsComponent } from './dashboard/patients/patients.component';
import { FormsComponent } from './dashboard/forms/forms.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirection vers Dashboard par défaut
  { path: 'dashboard', component: DashboardComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent } // Page non trouvée
];

