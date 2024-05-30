import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { EventEmitter, Input, Output } from '@angular/core';

/**
 * @title Basic buttons
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = "";
  @Input() type: string = "";
  @Output() clickEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  handleClick() {
    this.clickEvent.emit();
  }
}
