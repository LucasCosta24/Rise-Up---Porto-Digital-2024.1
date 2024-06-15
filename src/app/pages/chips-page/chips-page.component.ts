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
CodesForHTML4: string = `<app-chips type = "chip4"></app-chips>`;
CodesForHTML5 : string =`<app-chips type = "chip7"></app-chips>;`;

codeForHTML4 : string = 
` <div *ngIf="type == 'chip4'" class="chip4" (click)="handleClick4()">
       <div class="chip13" #chip4>Digite</div>
          <button class="closebtn-chip4" (click)="handleClose4($event)">&times;</button>
</div>`

codeForCSS4 : string =
`/* Estilo para novo chip4 */
.chip4 {
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
  height: 38px;
  font-size: 16px;
  line-height: 32px;
  border-radius: 16px;
  border: 1px solid #fb9127;
  background-color: #ee8e11;
  color: #000000;
  margin: 5px;
  position: relative;
  border: none; /* Remove borda */
}

.chip13 {
  display: inline-block;
  height: 20px;
  line-height: 32px;
  margin-right: 10px; /* Adicionar espaço entre o texto e o botão de fechar */
  border: 2px ;
  border-color: 2px ;
  border: 1px solid #ee8e11;
  background-color: #ee8e11;
}

.closebtn-chip4 {
  background-color: transparent;
  border: none;
  color: #000000;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  margin-left: 10px;
}

.closebtn-chip4:hover {
  color: #000;
}`

codeForTS4 : string =
`
@ViewChild('chip4') chipRef4: ElementRef | undefined;


handleClick4() {
      const newName = prompt('Digite um novo nome para o chip:');
      if (newName !== null && newName.trim() !== '') {
        const limiteCaracteres = 12;
  
        if (newName.trim().length > limiteCaracteres) {
          alert(Por favor, digite no máximo {limiteCaracteres} caracteres.);
          return; // Saia da função sem fazer nada
        }
  
        if (newName.trim() !== '') {
          console.log(this.chipRef4?.nativeElement);
          if (this.chipRef4) {
            this.chipRef4.nativeElement.innerHTML = newName;
          }
        }
      }
      console.log(this.chipRef4!.nativeElement);
      this.chipRef4!.nativeElement.innerHTML = newName;
    }
  
    handleClose4(event: Event) {
      event.stopPropagation(); // Impede que o clique no botão feche dispare o handleClick
      const chipElement = (event.target as HTMLElement).parentElement;
      if (chipElement) {
        chipElement.style.display = 'none';
      }
    }`

    codeForHTML5 : string = 
    `<div *ngIf="type == 'chip7'">
   <div *ngFor="let chip of chipList; let last = last" class="chip7" (click)="handleClickChip7(chip)">
     <div class="chip14" #chip7>{{ chip.name }}</div>
     <button class="closebtn-chip7" (click)="handleCloseChip7($event, chip)">&times;</button>
   </div>
   <!-- Botão para adicionar novo chip, sempre visível -->
   <div class="add-chip" (click)="addChip($event)">+</div>
 </div>`
    

 codeForCSS5 : string =
 `.chip7 {
  display: inline-flex;
  align-items: center;
  padding: 0 20px;
  height: 38px;
  font-size: 16px;
  line-height: 38px;
  border-radius: 20px;
  border: 2px solid #0602ff;
  background-color: #ee8e11;
  color: #000000;
  position: relative;
  font-family: Arial, sans-serif;
  cursor: pointer;
  position: relative;
  margin-right: 5px;
  
}



.closebtn-chip7 {
  background-color: transparent;
  border: none;
  color: #000000;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  margin-left: 10px;
}

.closebtn-chip7:hover {
  color: #000;
}

.add-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: transparent;
  color: #000;
  font-size: 20px;
  cursor: pointer;
  margin: 5px;
  margin-top: 10px;
}

.add-chip:hover {
  background-color: #d8d7d6f2;
}

.chip7:hover {
  background-color: #ffb578;
}`
  

codeForTS5 : string =
` handleClickChip7(chip: { id: number, name: string }) {
      const newName = prompt('Digite um novo nome para o chip:');
      if (newName !== null && newName.trim() !== '') {
        const limiteCaracteres = 12;
        if (newName.trim().length > limiteCaracteres) {
          alert(Por favor, digite no máximo S(esse S é um cifrão){limiteCaracteres} caracteres.);
          return;
        }
        chip.name = newName.trim();
      }
    }
  
    handleCloseChip7(event: Event, chip: { id: number, name: string }) {
      event.stopPropagation();
      this.chipList = this.chipList.filter(c => c.id !== chip.id);
    }
  
    addChip(event: Event) {
      event.stopPropagation();
      if (this.chipList.length < 5) {
        const newId = this.chipList.length ? Math.max(...this.chipList.map(c => c.id)) + 1 : 1;
        this.chipList.push({ id: newId, name: 'Digite' });
      }
    }`



}
