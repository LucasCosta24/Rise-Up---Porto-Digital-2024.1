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
  @Input('bg-color') bgColor: string = "#eba146";
  @Input() text2: string = "Chip dois";
  @Input('bg-color') bgColor1: string = "#839fc7";

// chips: { name: string }[] = []; // Array para armazenar nomes de chips
// maxChips = 10;

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

    
    // ngOnInit() {
      
    // }
    
    // editChip(chipName: string, element: HTMLElement) {
    //   const newName = prompt('Digite um novo nome para o chip (máx 10 caracteres):');
    
    //   if (newName !== null && newName.trim() !== '' && newName.length <= 10) {
    //     const chipIndex = this.chips.findIndex(chip => chip.name === chipName);
    //     this.chips[chipIndex].name = newName;
    //     element.textContent = newName;
    //   } else {
    //     alert('O nome do chip deve ter no máximo 10 caracteres.');
    //   }
    // }
    
    // removeChip(element: HTMLElement) {
    //   element.parentElement!.removeChild(element); // Remove o elemento do DOM
    // }
    
    // addNewChip() {
    //   if (this.chips.length >= this.maxChips) {
    //     alert('Você atingiu o limite máximo de chips (10).');
    //     return;
    //   }
    
    //   const newChip = document.createElement('div');
    //   newChip.className = 'chip4';
    
    //   const newChipName = document.createElement('span');
    //   newChipName.className = 'chipName';
    //   newChipName.textContent = 'Clique para alterar';
    //   newChipName.addEventListener('click', () => this.editChip(newChipName.textContent!, newChip));
    
    //   const closeBtn = document.createElement('span');
    //   closeBtn.className = 'closebtn';
    //   closeBtn.innerHTML = '&times;';
    //   closeBtn.addEventListener('click', () => this.removeChip(newChip));
    
    //   newChip.appendChild(newChipName);
    //   newChip.appendChild(closeBtn);
    
    //   const chipContainer = document.getElementById('chipContainer');
    //   const addChipSpan = document.getElementsByClassName('addChip')[0];
    //   chipContainer!.insertBefore(newChip, addChipSpan);
    
    //   // Adiciona o novo chip ao array de chips
    //   this.chips.push({ name: newChipName.textContent! });
    // }
    


    }






