import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandinggridComponent } from './expandinggrid.component';

describe('ExpandinggridComponent', () => {
  let component: ExpandinggridComponent;
  let fixture: ComponentFixture<ExpandinggridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandinggridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpandinggridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
