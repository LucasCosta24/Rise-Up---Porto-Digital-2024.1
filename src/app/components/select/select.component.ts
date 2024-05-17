import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

/** @title Select with custom trigger text */
@Component({
  selector: 'app-select',
  templateUrl: 'select.component.html',
  styleUrl: 'select.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
})
export class SelectComponent {
  Nomes = new FormControl('');

  toppingList: string[] = ['Marllon', 'João', 'Luquinhas', 'Duda', 'José', 'Matheus','Joninhas'];
}
