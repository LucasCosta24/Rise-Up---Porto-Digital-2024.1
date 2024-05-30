import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-expandinggrid',
  templateUrl: './expandinggrid.component.html',
  styleUrls: ['./expandinggrid.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ExpandinggridComponent {

  openTab(tabName: string): void {
    const targetTab = document.getElementById(tabName);
    if (targetTab) {
      const isCurrentlyVisible = targetTab.style.display === 'block';
      
      
      const containerTabs = document.querySelectorAll('.containerTab');
      containerTabs.forEach((containerTab) => {
        (containerTab as HTMLElement).style.display = 'none';
      });

      
      if (!isCurrentlyVisible) {
        targetTab.style.display = 'block';
      }
    } else {
      console.warn('Tab with ID "${tabName}" not found.');
    }
  }

  closeTab(tabName: string): void {
    const targetTab = document.getElementById(tabName);
    if (targetTab) {
      targetTab.style.display = 'none';
    } else {
      console.warn('Tab with ID "${tabName}" not found.');
    }
  }
}