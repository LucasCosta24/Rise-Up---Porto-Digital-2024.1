import {DataSource} from '@angular/cdk/collections';
import {Component, Input} from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import {BehaviorSubject, Observable} from 'rxjs';
import { CommonModule } from '@angular/common';

export interface ColorNumbers {
  nome: string;
  posicao: number;
  cor: string;
  
}

const COLOR_DATA: ColorNumbers[] = [
  {posicao: 1, nome: 'Um', cor: 'Vermelho'},
  {posicao: 2, nome: 'Dois', cor: 'Amarelo'},
  {posicao: 3, nome: 'Três', cor:'Azul'},
  {posicao: 4, nome: 'Quatro', cor: 'Verde'},
  {posicao: 5, nome: 'Cinco', cor: 'Roxo'},
  {posicao: 6, nome: 'Seis', cor: 'Laranja'},
 
];

@Component({
  selector: 'app-table',
  styleUrl: 'table.component.css',
  templateUrl: 'table.component.html',
  standalone: true,
  imports: [CdkTableModule, CommonModule],
})
export class TableComponent {
  displayedColumns: string[] = ['posicao', 'nome', 'cor'];
  dataSource = new ExampleDataSource();
  @Input() type: string = "text";
  

}

export class ExampleDataSource extends DataSource<ColorNumbers> {
 
  data = new BehaviorSubject<ColorNumbers[]>(COLOR_DATA);

  connect(): Observable<ColorNumbers[]> {
    return this.data;
  }

  disconnect() {}
}