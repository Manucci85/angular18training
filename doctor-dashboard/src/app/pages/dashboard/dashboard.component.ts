import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink,
    MatTableModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  displayedColumns: string[] = ['patient', 'status'];
  formData = [
    {patient: 'John Doe', status: 'Complété'},
    {patient: 'Jane Smith', status: 'En attente'},
  ];
}
