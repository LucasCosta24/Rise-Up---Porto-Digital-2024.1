import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ChipsComponent } from './components/chips/chips.component';
import { ListComponent } from './components/list/list.component';
import { TableComponent } from './components/table/table.component';
import { NavBarComponent } from './appcomponents/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app.routes';
import { SideBarComponent } from './appcomponents/side-bar/side-bar.component';
import { InputbuttonComponent } from './components/inputbutton/inputbutton.component';
import { InputTextComponent } from './components/inputtext/inputtext.component';
import { SelectComponent } from './components/select/select.component';
import { ButtonComponent } from './components/button/button.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { ModaisComponent } from './components/modais/modais.component';
import { InputPageComponent } from './pages/input-page/input-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            CardComponent,
            CardPageComponent,
            ChipsComponent, 
            ListComponent, 
            TableComponent,
            InputbuttonComponent, 
            InputTextComponent,
            NavBarComponent,
            AppRoutingModule,
            SideBarComponent,
            SelectComponent,
            ButtonComponent,
            ModaisComponent,
            InputPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'component-library';
}
