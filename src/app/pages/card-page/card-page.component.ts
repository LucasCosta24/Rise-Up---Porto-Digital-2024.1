import { Component, Input } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Highlight, HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

import 'highlight.js/styles/androidstudio.min.css';

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [CardComponent, Highlight, HighlightAuto, HighlightLineNumbers],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.css'
})
export class CardPageComponent {
  @Input() longText: string = "Conteúdo do card";
  codeForHTML = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

  <div class="card">
  
    <div class="card-header">
      <i class="icon" [ngClass]="'fas fa-' + icon"></i>                                
      <h2>{{title}}</h2>
    </div>
  
    <div class="card-body">
      <ng-content></ng-content>
    </div>
  
  </div>`;

  codeForCSS = `
  .card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 30px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    margin: 0 auto;
    background-color: #ffffff;
  }
  
  .card-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  .icon {
    margin-right: 10px;
  }
  
  .card-body {
    padding: 60px;
  }
  
  .text-card {
    font-size: 20px;
    align-items: center;
    justify-content: center;
  }
  `;

  codeForTS = `import { CommonModule } from '@angular/common';
  import { Component, Input } from '@angular/core';
  
  @Component({
    selector: 'app-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css'
  })
  export class CardComponent {
    @Input() title: string = "Banco de Dados";
    @Input() icon: string = "database";
  }
";`;
}
