import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule, MatListModule, CommonModule],   
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})  
export class ListComponent {
  @Input('innerText') texto: string = "";
  @Input() type: string = "text";
}
