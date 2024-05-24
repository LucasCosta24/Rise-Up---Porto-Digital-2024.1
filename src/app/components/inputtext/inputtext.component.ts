import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputText',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inputtext.component.html',
  styleUrl: './inputtext.component.css'
})
export class InputTextComponent {
  @Input() type: string = "text";
  @Input() date: string = "text";
  @Input() password: string = "text";
}
