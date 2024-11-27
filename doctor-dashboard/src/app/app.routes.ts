import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ManagePatientsComponent} from './pages/manage-patients/manage-patients.component';
import {ManageFormsComponent} from './pages/manage-forms/manage-forms.component';

export const routes: Routes = [

  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'patients', component: ManagePatientsComponent},
  {path: 'forms', component: ManageFormsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutes {
}
