import { Component } from '@angular/core';
import { SelectComponent } from '../../components/select/select.component';
import { Highlight, HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-select-page',
  standalone: true,
  imports: [SelectComponent, Highlight, HighlightAuto, HighlightLineNumbers],
  templateUrl: './select-page.component.html',
  styleUrl: './select-page.component.css'
})
export class SelectPageComponent {

  HTML: string = `<select class="select" ngIf*="type == 'simple'">
  <option value="">Selecione uma Opção</option>
  <option value="Opção 1">Opção 1</option>
  <option value="Opção 2">Opção 2</option>
  <option value="Opção 3">Opção 3</option>
  <option value="Opção 4">Opção 4</option>
  <option value="Opção 5">Opção 5</option>
  <option value="Opção 6">Opção 6</option>
  <option value="Opção 7">Opção 7</option>
</select>`

HTML2: string = `<select class="select" ngIf*="type == 'simple'">
  <option value="">Selecione uma Opção</option>
  <option value="Opção 1">Opção 1</option>
  <option value="Opção 2">Opção 2</option>
  <option value="Opção 3">Opção 3</option>
  <option value="Opção 4">Opção 4</option>
  <option value="Opção 5">Opção 5</option>
  <option value="Opção 6">Opção 6</option>
  <option value="Opção 7">Opção 7</option>
</select>`

}

