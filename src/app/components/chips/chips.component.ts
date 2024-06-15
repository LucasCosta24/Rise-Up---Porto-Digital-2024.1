import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {Highlight, HighlightAuto } from 'ngx-highlightjs';
import {HighlightLineNumbers  } from 'ngx-highlightjs/line-numbers';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [MatChipsModule, CommonModule ,MatButtonModule,],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.css'
})


export class ChipsComponent {
  @Input() type: string = "";
  @Input() text1: string = "Chip um";
  @Input('bg-color') bgColor: string = "#eba146";
  @Input() text2: string = "Chip dois";
  @Input('bg-color') bgColor1: string = "#839fc7";
 
  @ViewChild('chip') chipRef: ElementRef|undefined;
  @ViewChild('chip4') chipRef4: ElementRef | undefined;
  @ViewChild('chipBlue') chipRefBlue: ElementRef | undefined;
  @ViewChild('chipPurple') chipRefPurple: ElementRef | undefined;




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



    handleClick4() {
      const newName = prompt('Digite um novo nome para o chip:');
      if (newName !== null && newName.trim() !== '') {
        const limiteCaracteres = 12;
  
        if (newName.trim().length > limiteCaracteres) {
          alert(`Por favor, digite no máximo ${limiteCaracteres} caracteres.`);
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
    }





    handleClickBlue() {
      const newName = prompt('Digite um novo nome para o chip:');
      if (newName !== null && newName.trim() !== '') {
        const limiteCaracteres = 12;
  
        if (newName.trim().length > limiteCaracteres) {
          alert(`Por favor, digite no máximo ${limiteCaracteres} caracteres.`);
          return; // Saia da função sem fazer nada
        }
  
        if (newName.trim() !== '') {
          console.log(this.chipRefBlue?.nativeElement);
          if (this.chipRefBlue) {
            this.chipRefBlue.nativeElement.innerHTML = newName;
          }
        }
      }
      console.log(this.chipRefBlue!.nativeElement);
      this.chipRefBlue!.nativeElement.innerHTML = newName;
    }
  
    handleClickPurple() {
      const newName = prompt('Digite um novo nome para o chip:');
      if (newName !== null && newName.trim() !== '') {
        const limiteCaracteres = 12;
  
        if (newName.trim().length > limiteCaracteres) {
          alert(`Por favor, digite no máximo ${limiteCaracteres} caracteres.`);
          return; // Saia da função sem fazer nada
        }
  
        if (newName.trim() !== '') {
          console.log(this.chipRefPurple?.nativeElement);
          if (this.chipRefPurple) {
            this.chipRefPurple.nativeElement.innerHTML = newName;
          }
        }
      }
      console.log(this.chipRefPurple!.nativeElement);
      this.chipRefPurple!.nativeElement.innerHTML = newName;
    }
  
    handleCloseChip4(event: Event) {
      event.stopPropagation(); // Impede que o clique no botão feche dispare o handleClick
      const chipElement = (event.target as HTMLElement).parentElement;
      if (chipElement) {
        chipElement.style.display = 'none';
      }
    }
  
    handleCloseChipBlue(event: Event) {
      event.stopPropagation(); // Impede que o clique no botão feche dispare o handleClick
      const chipElement = (event.target as HTMLElement).parentElement;
      if (chipElement) {
        chipElement.style.display = 'none';
      }
    }
  
    handleCloseChipPurple(event: Event) {
      event.stopPropagation(); // Impede que o clique no botão feche dispare o handleClick
      const chipElement = (event.target as HTMLElement).parentElement;
      if (chipElement) {
        chipElement.style.display = 'none';
      }
    }
  }





    




