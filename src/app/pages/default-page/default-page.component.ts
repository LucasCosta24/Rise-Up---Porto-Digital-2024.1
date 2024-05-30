import { Component } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { Highlight, HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-default-page',
  standalone: true,
  imports: [ListComponent, Highlight, HighlightAuto , HighlightLineNumbers],
  templateUrl: './default-page.component.html',
  styleUrl: './default-page.component.css'
})
export class DefaultPageComponent {
  codeForHTML: string = "<app-list type = 'simples'></app-list>"
}
