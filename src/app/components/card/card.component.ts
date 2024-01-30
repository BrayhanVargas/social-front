import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = 'Título predeterminado';
  @Input() description: string = 'Descripción predeterminada';
  @Input() creationDate: Date = new Date(); // Fecha actual por defecto

  constructor() { }
}
