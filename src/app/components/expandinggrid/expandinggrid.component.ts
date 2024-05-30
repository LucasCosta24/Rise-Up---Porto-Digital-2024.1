import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {Highlight, HighlightAuto } from 'ngx-highlightjs';
import {HighlightLineNumbers  } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-expandinggrid',
  templateUrl: './expandinggrid.component.html',
  styleUrls: ['./expandinggrid.component.css'],
  standalone: true,
  imports: [CommonModule,Highlight,HighlightAuto, HighlightLineNumbers,]
})
export class ExpandinggridComponent {

  codeForHTML : string = 
  `<div class="row">
  <div class="column" (click)="openTab('b1')">Bloco 1</div>
  <div class="column1" (click)="openTab('b2')">Bloco 2</div>
</div>

<br>
<div id="b1" class="containerTab" style="display:none;background:darkorange">
 
  <span (click)="closeTab('b1')" class="closebtn">x</span>
  <h2>Bloco 1</h2>
  <p>Exemplo 1</p>
</div>

<div id="b2" class="containerTab" style="display:none;background:dodgerblue">
  <span (click)="closeTab('b2')" class="closebtn">x</span>
  <h2>Bloco 2</h2>
  <p>Exemplo 2</p>
</div>`

  codeForCSS : string =
  `  .column{
      float: left;
      width: 20%;
      padding: 50px;
      text-align: center;
      font-size: 25px;
      cursor: pointer;
      color: white;
      background-color:darkorange;
      border-radius: 20px;
      border: 2px solid black;
      margin-right: 5%;
      transition: background-color 0.8s ease;
      font-family: Arial, sans-serif;
      cursor: pointer;
  }`

  codeForTS : string =
  `  openTab(tabName: string): void {
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
      console.warn('Tab with ID "{tabName}" not found.');
    }
  }

  closeTab(tabName: string): void {
    const targetTab = document.getElementById(tabName);
    if (targetTab) {
      targetTab.style.display = 'none';
    } else {
      console.warn('Tab with ID "{tabName}" not found.');
    }
  }
}`

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