import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modais',
  templateUrl: './expandinggrid.component.html',
  styleUrls: ['./expandinggrid.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ExpandinggridComponent {
  mostrar: boolean = false;

  toggle() {
    this.mostrar = !this.mostrar;
  }
}


function openTab(tabName: string): void {
  const containerTabs = document.querySelectorAll('.containerTab');

  // Converta o NodeList para um array
  const containerTabsArray = Array.from(containerTabs) as HTMLElement[];

  for (const containerTab of containerTabsArray) {
    containerTab.style.display = 'none';
  }

  const targetTab = document.getElementById(tabName);
  if (targetTab) {
    targetTab.style.display = 'block';
  } else {
    console.warn(`Tab with ID "${tabName}" not found.`);
  }
}
