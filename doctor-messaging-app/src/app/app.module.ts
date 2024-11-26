import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutes} from './app.routes'; // Import du module de routing
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MessagesComponent} from './messages/messages.component';
import {PatientsComponent} from './patients/patients.component';
import {FormsComponent} from './forms/forms.component';
import {provideHttpClient} from '@angular/common/http';
//import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MessagesComponent,
    PatientsComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes, // Ajout du module de routing ici
    //HttpClientModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
