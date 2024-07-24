import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerService } from '../worker.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-worker-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './worker-table.component.html',
  styleUrls: ['./worker-table.component.css']
})
export class WorkerTableComponent implements OnInit {
  workers$!: Observable<Array<{ name: string; position: string; photo: string }>>;
  
  constructor(private workerService: WorkerService) {}

  ngOnInit() {
    this.workers$ = this.workerService.workers$;
  }
}
