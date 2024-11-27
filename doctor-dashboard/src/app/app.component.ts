import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LayoutComponent} from './layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'doctor-dashboard';
}
