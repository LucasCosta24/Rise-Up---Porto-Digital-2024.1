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
  codeForHTML = ` <app-inputText type = 'date' />`
}
