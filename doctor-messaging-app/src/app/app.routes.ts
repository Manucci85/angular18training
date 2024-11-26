import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PatientsComponent} from './patients/patients.component';
import {FormsComponent} from './forms/forms.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'patients', component: PatientsComponent},
  {path: 'forms', component: FormsComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}, // Redirection par défaut
  {path: '**', redirectTo: 'login'} // Redirection pour les routes inconnues
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutes {
}
