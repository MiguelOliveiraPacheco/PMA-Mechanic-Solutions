import { Component } from '@angular/core';
import { WorkerFormComponent } from './worker-form/worker-form.component';
import { WorkerTableComponent } from './worker-table/worker-table.component';
import { CarCardsComponent } from './car-cards/car-cards.component';
import { FunFeatureComponent } from './fun-feature/fun-feature.component';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    WorkerFormComponent,
    WorkerTableComponent,
    CarCardsComponent,
    FunFeatureComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pma-mechanic-solutions';
}
