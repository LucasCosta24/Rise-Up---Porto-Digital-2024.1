import { Component } from '@angular/core';
import { ChipsComponent } from '../../components/chips/chips.component';
import { Highlight, HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-chips-page',
  standalone: true,
  imports: [ChipsComponent, Highlight, HighlightAuto, HighlightLineNumbers,],
  templateUrl: './chips-page.component.html',
  styleUrl: './chips-page.component.css'
})
export class ChipsPageComponent {

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
CodesForHTML1: string = `<app-chips type="chipstatic1"></app-chips>`;
CodesForHTML2: string = `<app-chips type="chipstatic2"></app-chips>`;
CodesForHTML3: string = `<app-chips type = "chip3"></app-chips>`;
}
