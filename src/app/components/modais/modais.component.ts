import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modais',
  templateUrl: './modais.component.html',
  styleUrls: ['./modais.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ModaisComponent {
  mostrar: boolean = false;

  toggle() {
    this.mostrar = !this.mostrar;
  }
}
