import { Component } from '@angular/core';
import { InputTextComponent } from '../../components/inputtext/inputtext.component';
import { Highlight, HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-input-page',
  standalone: true,
  imports: [ InputTextComponent, Highlight, HighlightAuto, HighlightLineNumbers],
  templateUrl: './input-page.component.html',
  styleUrl: './input-page.component.css'
})
export class InputPageComponent {
  codeForHTMLtext = `*ngIf="type == 'text'" class="input-group">
  <label for="username">{{text}}</label>
  <input type="text" id="username" name="username" required>
' />`

  codeForHTMLdate = `  *ngIf="type == 'password'" class="input-group">
  <label for="password">{{text}}</label>
  <input type="password" id="password" name="password" required>/>`
  
  codeForHTMLpassword = `*ngIf="type == 'date'" class="input-group">
  <label for="birthdate">{{text}}</label>
  <input type="date" id="birthdate" name="birthdate" required>
/>`
}
