import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaisComponent } from './modais.component';
// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';


bootstrapApplication(ModaisComponent)
  .catch(err => console.error(err));

describe('ModaisComponent', () => {
  let component: ModaisComponent;
  let fixture: ComponentFixture<ModaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
