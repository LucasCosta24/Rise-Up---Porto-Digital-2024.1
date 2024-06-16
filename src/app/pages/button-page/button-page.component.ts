import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventEmitter, Input, Output } from '@angular/core';
import { Highlight, HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers'
import { ButtonComponent } from '../../components/button/button.component';
@Component({
  selector: 'app-button-page',
  standalone: true,
  imports: [CommonModule, ButtonComponent, Highlight, HighlightAuto, HighlightLineNumbers],
  templateUrl: './button-page.component.html',
  styleUrl: './button-page.component.css'
})
export class ButtonComponentPage {
  @Input() longText: string = "Conteúdo do button";
  call1: string = `<app-button type = "simples"></app-button>`

  call2: string = `<app-button type = "Fino"></app-button>`

  call3: string = `<app-button type = "Desativado"></app-button>`

  call4: string = `<app-button type = "Link"></app-button>`



  codeForHTML = `<button 
  class="button default" 
  onclick="handleClick()">
  Botao Simples
</button>`;
  codeForCSS = `<pre><code>&lt;style&gt;
  .button {{ '{' }} 
  display: inline-block; 
  padding: 17px 34px; 
  font-size: 30px; 
  font-weight: bold; 
  text-align: center; 
  text-decoration: none; 
  border-radius: 10px; 
  cursor: pointer; 
  transition: background-color 0.3s, color 0.3s; 
  margin-top: 10px; 
  {{ '}' }} 
  .button.default {{ '{' }} 
  color: #000000; 
  background-color: #c0deff; 
  border: 2px solid #000000; 
  .button.default:hover {{ '{' }} 
   background-color: #0056b3; 
   border-color: #0056b3; 
   {{ '}' }} 
   &lt;/style&gt;</code></pre>`;
   codeForHTML1 = 
`<button class="thin">Fino</button>
<button class="thin basic disabled"disabled>Desativado</button>
<a class="thin basic" href="#" target="_blank">Link</a>`;
   codeForCSS1 = 
`button.thin {
  padding: 8px 12px;
  border: 1px solid #000000;
  background-color: #fff;
  color: #000000;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;}
button.basic {
  padding: 8px 12px;
  border: 1px solid #000000;
  background-color: #fff;
  color: #000000;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;}
button.basic.disabled {
  opacity: 1;
  cursor: not-allowed;}
a.thin.basic {
  padding: 8px 12px;
  border: 1px solid #000000;
  background-color: #fff;
  color: #000000;
  text-decoration: none;
  font-size: 14px;
  border-radius: 4px;}
a.thin.basic.disabled {
  opacity: 0.5;
  pointer-events: none;}`


  @Input() text: string = "";
  @Input() type: string = "";
  @Output() clickEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  handleClick() {
    this.clickEvent.emit();
  }
}