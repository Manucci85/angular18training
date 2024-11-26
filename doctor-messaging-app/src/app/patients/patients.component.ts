import {Component, OnInit} from '@angular/core';
import {PatientsService} from '../services/patients.service';
import {CommonModule} from '@angular/common';
import {provideHttpClient} from '@angular/common/http';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {
  patients: any[] = [{name: 'John Doe', email: "john@example.com"}];

  constructor(private patientsService: PatientsService) {
  }

  ngOnInit(): void {
    this.patientsService.getPatients()
      .subscribe((data) => {
        this.patients = data;
      })
  }
}
