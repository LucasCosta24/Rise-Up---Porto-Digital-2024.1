import { Component } from '@angular/core';
import { InputbuttonComponent } from '../../components/inputbutton/inputbutton.component';
import { Highlight, HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-inputbutton-page',
  standalone: true,
  imports: [ InputbuttonComponent, Highlight, HighlightAuto, HighlightLineNumbers],
  templateUrl: './inputbutton-page.component.html',
  styleUrl: './inputbutton-page.component.css'
})
export class InputButtonPageComponent {
  codeForHTMLradio =     `<input type="radio" id="option1" name="option" value="option1" checked>
  <label for="option1">Opção 1</label><br>
  <input type="radio" id="option2" name="option" value="option2">
  <label for="option2">Opção 2</label><br>
  <input type="radio" id="option3" name="option" value="option3">
  <label for="option3">Opção 3</label> />`

  codeForHTMLswitch= `   <label for="toggle">LIGADO</label><br>
  <br>
  <input type="checkbox" id="toggle" name="toggle">
  <label for="toggle" class="toggle-label">DESLIGADO</label>/>`

}
