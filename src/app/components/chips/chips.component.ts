import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {Highlight, HighlightAuto } from 'ngx-highlightjs';
import {HighlightLineNumbers  } from 'ngx-highlightjs/line-numbers';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [MatChipsModule, CommonModule ,Highlight,HighlightAuto, HighlightLineNumbers,MatButtonModule,],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.css'
})


export class ChipsComponent {
  @Input() text1: string = "Chip um";
  @Input('bg-color') bgColor: string = "#eba146";
  @Input() text2: string = "Chip dois";
  @Input('bg-color') bgColor1: string = "#839fc7";


codeForHTML : string = 
      `<div class="chip" [ngStyle]="{'background-color': bgColor}">
          <div>{{text1}}</div>
      </div>
      <div class="chip1" [ngStyle]="{'background-color': bgColor1}">
          <div>{{text2}}</div>
      </div>;`

codeForCSS : string = 
      `.chip {
        display: inline-block;        
        padding: 0 10px;
        height: 32px;
        font-size: 14px;
        line-height: 32px;
        border-radius: 16px;
        border: 1px solid #fb9127;
        background-color: #ee8e11;
        margin: 5px;
        margin-right: 10px;
        margin-bottom: 10px;
        font-family: Arial, sans-serif;
        cursor: pointer;
      }`

  codeForTSS : string =
  `@Input() text1: string = "Chip um";
  @Input('bg-color') bgColor: string = "#eba146";`

  codeForHTML1 : string =
  `<div class="chip" (click)="handleClick()">
  <div class="chip12" #chip>Digite</div>
</div>`

  codeForCSS1 : string =
  `.chip {
    display: inline-block;        
    padding: 0 10px;
    height: 32px;
    font-size: 14px;
    line-height: 32px;
    border-radius: 16px;
    border: 1px solid #fb9127;
    background-color: #ee8e11;
    margin: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    font-family: Arial, sans-serif;
    cursor: pointer;
  }`

  codeForTS1 : string =
  `@ViewChild('chip') chipRef: ElementRef|undefined;

  handleClick() {
    const newName = prompt('Digite um novo nome para o chip:');
    if (newName !== null && newName.trim() !== '') {
      const limiteCaracteres = 12;

      if(newName.trim().length > limiteCaracteres){
        alert('Por favor, digite no máximo {limiteCaracteres} caracteres.');
        return; // Saia da função sem fazer nada
      }
      
      if (newName.trim() !== '') {
        console.log(this.chipRef?.nativeElement);
        if (this.chipRef) {
          this.chipRef.nativeElement.innerHTML = newName;
        }
        
      }
      }
      console.log(this.chipRef!.nativeElement); 
      this.chipRef!.nativeElement.innerHTML = newName;
    }
`









  @ViewChild('chip') chipRef: ElementRef|undefined;

  handleClick() {
    const newName = prompt('Digite um novo nome para o chip:');
    if (newName !== null && newName.trim() !== '') {
      const limiteCaracteres = 12;

      if(newName.trim().length > limiteCaracteres){
        alert(`Por favor, digite no máximo ${limiteCaracteres} caracteres.`);
        return; // Saia da função sem fazer nada
      }
      
      if (newName.trim() !== '') {
        console.log(this.chipRef?.nativeElement);
        if (this.chipRef) {
          this.chipRef.nativeElement.innerHTML = newName;
        }
        
      }
      }
      console.log(this.chipRef!.nativeElement); 
      this.chipRef!.nativeElement.innerHTML = newName;
    }

    }


    




