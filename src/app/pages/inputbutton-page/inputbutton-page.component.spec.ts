import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputButtonPageComponent } from './inputbutton-page.component';

describe('InputButtonPageComponent', () => {
  let component: InputButtonPageComponent;
  let fixture: ComponentFixture<InputButtonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputButtonPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputButtonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
