import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-worker-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css']
})
export class WorkerFormComponent {
  workerForm: FormGroup;

  constructor(private fb: FormBuilder, private workerService: WorkerService) {
    // Criação do formulário com validações
    this.workerForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      photo: ['']
    });
  }

  onSubmit() {
    if (this.workerForm.valid) {
      this.workerService.addWorker(this.workerForm.value);
      this.workerForm.reset();
    }
  }
}
