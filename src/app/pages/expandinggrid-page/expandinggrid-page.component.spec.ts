import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandinggridPageComponent } from './expandinggrid-page.component';

describe('ExpandinggridPageComponent', () => {
  let component: ExpandinggridPageComponent;
  let fixture: ComponentFixture<ExpandinggridPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandinggridPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpandinggridPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
