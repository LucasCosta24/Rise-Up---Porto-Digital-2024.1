import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';


@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [MatChipsModule, CommonModule],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.css'
})
export class ChipsComponent {
  @Input() text: string = "Static Chips";
  @Input('bg-color') bgColor: string = "#dce0dd ";
}
