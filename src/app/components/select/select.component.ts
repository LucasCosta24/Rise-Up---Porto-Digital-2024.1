import {Component, Input, input} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

/** @title Select with custom trigger text */
@Component({
  selector: 'app-select',
  templateUrl: 'select.component.html',
  styleUrl: 'select.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, CommonModule],
})
export class SelectComponent {
  @Input() type: string = "text";

  Nomes = new FormControl('');

}
