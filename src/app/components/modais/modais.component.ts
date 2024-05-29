import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-modais',
  templateUrl: './modais.component.html',
  styleUrls: ['./modais.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ModaisComponent {
  mostrar: boolean = false;

  toggle() {
    this.mostrar = !this.mostrar;
  }
}
