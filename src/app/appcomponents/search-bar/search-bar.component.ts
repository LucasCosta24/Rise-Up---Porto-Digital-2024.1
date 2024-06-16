import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  components = [
    "Chip",
    "List",
    "Button",
    "Card",
    "Expandinggrid",
    "Button-input",
    "Text-input",
    "Select",
    "Table"
  ];

  searchResults: string[] = [];
  searchTerm: string = '';

  constructor(private router: Router) {}

  onSearchInput(event: Event): void {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.searchResults = [];

    if (query.length > 0) {
      const filteredComponents = this.components.filter(component => component.toLowerCase().includes(query));
      
      if (filteredComponents.length > 0) {
        this.searchResults = filteredComponents;
      } else {
        this.searchResults.push('Componente não encontrado');
      }
    }
  }

  navigateToComponent(component: string): void {
    if (component !== 'Componente não encontrado') {
      // Redirecionando para a rota existente com fragmento
      this.router.navigate([`/${component.toLowerCase()}`], { fragment: component.toLowerCase() });
    }
  }

}
