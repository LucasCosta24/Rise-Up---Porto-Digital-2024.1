import { Component } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ ListComponent],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent {

}
