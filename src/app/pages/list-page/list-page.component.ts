import { Component } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { Highlight, HighlightAuto } from 'ngx-highlightjs';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ ListComponent, Highlight , HighlightAuto, HighlightLineNumbers],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent {

  
  codeForHTML: string = `<ul *ngIf="type == 'simples'" role="list" class="list">
  <span>
      <div class="ul_title">Lista simples</div>
  </span>
<span>
  <li class="li">Item 1</li>
</span>
<span>
  <li class="li">Item 2</li> 
</span>
<span>
  <li class="li">Item 3</li>
</span> 
</ul>`;

  codeForHTML2: string = `<ul *ngIf="type == 'ordenada'" role="list" class="ordenada-list">
  <span>
      <div class="ul_title">Lista ordenada</div>
  </span>
<span>
  <li class="li">Item 1</li>
</span>
<span>
  <li class="li">Item 2</li> 
</span>
<span>
  <li class="li">Item 3</li>
</span> 
</ul> `

  codeForHTML3: string = `<ul *ngIf="type == 'Aninhada'" role="list" class="list">
  <span>
      <div class="ul_title">Lista Aninhada</div>
  </span>
<span>
  <li class="li">Item 1</li>
</span>
<span>
  <li class="li">Item 2</li> 
</span>
  <span>
      <ul style="list-style: none;">
          <li class="li">Item 2.1</li>
          <li class="li">Item 2.2</li>
      </ul>
  </span>
<span>
  <li class="li">Item 3</li>
</span> 
</ul>`

  codeForHTML4: string = `<ul *ngIf="type == 'botoes'" role="list" class="list">
  <span>
      <div class="ul_title">Lista de Botões</div>
  </span>
<span>
  <li class="li">
      <button class="li-button-example">Botão 1</button>
      </li>
</span>
<span>
  <li class="li">
      <button class="li-button-example">Botão 2</button>
    </li> 
</span>
<span>
  <li class="li">
       <button class="li-button-example">Botão 3</button>
   </li>
</span> 
</ul>`

  CSS: string = `
  .list {
    list-style: decimal;
    }
  `
  CSS2: string = `
  .list {
    list-style: none;
    }
    .li2 {
    list-style: none;
    }
  `
  CSS3: string = `
  .li-button-example {
    padding: 10px;
    border: 1px solid black;
    font-size: large;
    background-color: white;
    border-radius: 20px;
    }
    .li-button-example:hover {
    cursor: pointer;
    color: white;
    background-color: rgb(33, 149, 243);
    }
  `
  CodesForHTML: string = `<app-list type = 'simples'></app-list>`
  CodesForHTML2: string = `<app-list type = 'ordenada'></app-list>`
  CodesForHTML3: string = `<app-list type="Aninhada"></app-list>`
}
