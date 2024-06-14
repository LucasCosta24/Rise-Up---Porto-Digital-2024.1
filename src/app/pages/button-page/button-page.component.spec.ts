import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponentPage } from './button-page.component';

describe('ButtonPageComponent', () => {
  let component: ButtonComponentPage;
  let fixture: ComponentFixture<ButtonComponentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponentPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
