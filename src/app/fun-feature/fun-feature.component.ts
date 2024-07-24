import { Component } from '@angular/core';

@Component({
  selector: 'app-fun-feature',
  standalone: true,
  templateUrl: './fun-feature.component.html',
  styleUrls: ['./fun-feature.component.css']
})
export class FunFeatureComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
