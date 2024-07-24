import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-worker-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './worker-table.component.html',
  styleUrls: ['./worker-table.component.css']
})
export class WorkerTableComponent {
  @Input() workers: Array<{ name: string; position: string; photo: string }> = [];
}
