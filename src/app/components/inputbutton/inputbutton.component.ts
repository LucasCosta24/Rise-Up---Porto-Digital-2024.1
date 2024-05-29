import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputbutton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inputbutton.component.html',
  styleUrl: './inputbutton.component.css'
})
export class InputbuttonComponent {
  @Input() radio: string = "button";
  @Input() switch: string = "button";

}
