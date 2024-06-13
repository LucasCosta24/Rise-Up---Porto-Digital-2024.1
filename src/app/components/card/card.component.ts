import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ChipsComponent } from '../chips/chips.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ChipsComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = "Banco de Dados";
  @Input() icon: string = "database";
  @Input() type: string = "";
  @Input() imageSrc: string = "";
}
