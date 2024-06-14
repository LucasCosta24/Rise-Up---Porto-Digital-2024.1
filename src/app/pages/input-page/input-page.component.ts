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
  codeForHTMLtext = `<div *ngIf="type == 'text'" class="input-group">
  <label for="username">{{text}}</label>
  <input type="text" id="username" name="username" required>
' </div>`

  codeForHTMLdate = `<div *ngIf="type == 'password'" class="input-group">
  <label for="password">{{text}}</label>
  <input type="password" id="password" name="password" required>/<div>`
  
  codeForHTMLpassword = `<div *ngIf="type == 'date'" class="input-group">
  <label for="birthdate">{{text}}</label>
  <input type="date" id="birthdate" name="birthdate" required>
  </div>`

codeforHTMLinputtextpull =`<app-inputText type = 'text'/>`
codeforHTMLinputpasswordpull =`<app-inputText type = 'password'/>`
codeforHTMLinputdatepull =`<app-inputText type = 'date'/>`
codeforHTMLinputts=`import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputText',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inputtext.component.html',
  styleUrl: './inputtext.component.css'
})
export class InputTextComponent {
  @Input() text: string = "Texto";
  @Input() password: string = "Senha";
  @Input() date: string = "Data";
  @Input() type: string = "";
}
`
}