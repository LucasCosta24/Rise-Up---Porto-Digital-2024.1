import {DataSource} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import {BehaviorSubject, Observable} from 'rxjs';

export interface PeriodicDogs {
  name: string;
  position: number;
  weight: number;
  
}

const ELEMENT_DATA: PeriodicDogs[] = [
  {position: 1, name: 'Shiba Inu', weight: 1.0079},
  {position: 2, name: 'Akita Ken', weight: 4.0026},
  {position: 3, name: 'Hokkaidō Ken', weight: 6.941},
  {position: 4, name: 'Kai Ken', weight: 9.0122},
  {position: 5, name: 'Kishū Ken', weight: 10.811},
  {position: 6, name: 'Shikoku Ken', weight: 12.0107},
 
];

@Component({
  selector: 'app-table',
  styleUrl: 'table.component.css',
  templateUrl: 'table.component.html',
  standalone: true,
  imports: [CdkTableModule],
})
export class TableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new ExampleDataSource();
}

export class ExampleDataSource extends DataSource<PeriodicDogs> {
 
  data = new BehaviorSubject<PeriodicDogs[]>(ELEMENT_DATA);

  connect(): Observable<PeriodicDogs[]> {
    return this.data;
  }

  disconnect() {}
}