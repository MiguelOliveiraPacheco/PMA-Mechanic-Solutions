import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-worker-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css']
})
export class WorkerFormComponent {
  workerForm: FormGroup;
  workers: Array<{ name: string; position: string; photo: string }> = [];

  constructor(private fb: FormBuilder) {
    // Criação do formulário com validações
    this.workerForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      photo: ['']
    });
  }

  onSubmit() {
    if (this.workerForm.valid) {
      this.workers.push(this.workerForm.value);
      this.workerForm.reset();
    }
  }
}
