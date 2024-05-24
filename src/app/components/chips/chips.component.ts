import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';


@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [MatChipsModule, CommonModule],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.css'
})
export class ChipsComponent {
  @Input() text1: string = "Chip um";
  @Input('bg-color') bgColor: string = "#dce0dd ";
  @Input() text2: string = "Chip dois";
  @Input('bg-color') bgColor1: string = "#839fc7";


  @ViewChild('chip') chipRef: ElementRef|undefined;

  handleClick() {
    const newName = prompt('Digite um novo nome para o chip:');
    if (newName !== null && newName.trim() !== '') {
      const limiteCaracteres = 10;

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




