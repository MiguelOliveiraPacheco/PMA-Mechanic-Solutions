import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-cards.component.html',
  styleUrls: ['./car-cards.component.css']
})
export class CarCardsComponent {
  cars = [
    { name: 'Toyota Corolla', issue: 'Problema no motor', image: '/1.jpg' },
    { name: 'Volkswagen Scirocco', issue: 'Substituição de travões', image: '/2.jpg' },
    { name: 'Nissan Juke', issue: 'Mudança de óleo', image: '/3.jpg' }
  ];
}
