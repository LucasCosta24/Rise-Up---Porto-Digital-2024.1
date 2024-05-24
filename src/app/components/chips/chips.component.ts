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
  @Input() text1: string = "Chip um";
  @Input('bg-color') bgColor: string = "#dce0dd ";
  @Input() text2: string = "Chip dois";
  @Input('bg-color') bgColor1: string = "#839fc7";
}
