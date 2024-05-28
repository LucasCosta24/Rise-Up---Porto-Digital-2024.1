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

}
