import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { Highlight, HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-table-page',
  standalone: true,
  imports: [ TableComponent, Highlight, HighlightAuto, HighlightLineNumbers],
  templateUrl: './table-page.component.html',
  styleUrl: './table-page.component.css'
})
export class TablePageComponent {
HTML: string = `<table *ngIf="type == 'simple'" class="table-example" cdk-table [dataSource]="dataSource">
 
<!-- Posição Column -->
<ng-container cdkColumnDef="posicao">
  <th cdk-header-cell *cdkHeaderCellDef> No. </th>
  <td cdk-cell *cdkCellDef="let element"> {{element.posicao}} </td>
</ng-container>

<!-- Nome Column -->
<ng-container cdkColumnDef="nome">
  <th cdk-header-cell *cdkHeaderCellDef> Nome </th>
  <td cdk-cell *cdkCellDef="let element"> {{element.nome}} </td>
</ng-container>

<!-- Cor Column -->
<ng-container cdkColumnDef="cor">
  <th cdk-header-cell *cdkHeaderCellDef> Cor </th>
  <td cdk-cell *cdkCellDef="let element"> {{element.cor}} </td>
</ng-container>

<tr cdk-header-row *cdkHeaderRowDef="displayedColumns"></tr>
<tr cdk-row *cdkRowDef="let row; columns: displayedColumns;"></tr>
</table>`;
TS: string = `import {DataSource} from '@angular/cdk/collections';
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
}`;
CSS: string = `.table-example{
  padding-left: 4rem;
  }
  table {
      width: 100%;
    }`;
    HTML2: string = `<table *ngIf="type == 'estrutural'" border="1">
    <thead>
    <tr>
        <th>titulo 1</th>
        <th>titulo 2</th>
        <th>titulo 3</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Body1 linha1</td>
        <td>Body2 linha1</td>
        <td>Body3 linha1</td>
    </tr>
    <tr>
        <td>Body12 linha2</td>
        <td>Body2 linha2</td>
        <td>Body3 linha2</td>
    </tr>
    </tbody>
    <tfoot>
        <td>Foot 1</td>
        <td>Foot 2</td>
        <td>Foot 3</td>
    </tfoot>
  </table>
  `
}
