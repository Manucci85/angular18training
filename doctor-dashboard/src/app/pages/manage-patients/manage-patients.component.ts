import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-manage-patients',
  standalone: true,
  imports: [
    MatButtonModule,
    MatListModule,
    NgForOf
  ],
  templateUrl: './manage-patients.component.html',
  styleUrl: './manage-patients.component.css'
})
export class ManagePatientsComponent {
  patients = [
    {name: 'John Doe', email: 'john@example.com'},
    {name: 'Jane Smith', email: 'jane@exmaple.com'},
  ]

  addPatient() {
    const newPatient = {name: 'Nouveau Patient', email: 'new@example.com'};
    this.patients.push(newPatient);
  }
}
