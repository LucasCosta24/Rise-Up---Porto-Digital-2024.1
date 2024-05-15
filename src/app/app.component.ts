import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ChipsComponent } from './components/chips/chips.component';
import { ListComponent } from './components/list/list.component';
import { TableComponent } from './components/table/table.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            CardComponent,
            ChipsComponent, 
            ListComponent, 
            TableComponent, 
            NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'component-library';
}
