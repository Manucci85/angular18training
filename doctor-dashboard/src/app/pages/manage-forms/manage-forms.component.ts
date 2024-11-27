import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-manage-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './manage-forms.component.html',
  styleUrl: './manage-forms.component.css'
})
export class ManageFormsComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      patientName: [''],
      questions: ['']
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
