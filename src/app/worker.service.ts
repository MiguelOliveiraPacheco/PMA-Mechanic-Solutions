// worker.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  private workersSource = new BehaviorSubject<Array<{ name: string; position: string; photo: string }>>([]);
  workers$ = this.workersSource.asObservable();

  addWorker(worker: { name: string; position: string; photo: string }) {
    const currentWorkers = this.workersSource.value;
    this.workersSource.next([...currentWorkers, worker]);
  }
}