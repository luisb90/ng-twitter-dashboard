import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AveragePerMinuteCardComponent } from './average-per-minute-card.component';

describe('AveragePerMinuteCardComponent', () => {
  let component: AveragePerMinuteCardComponent;
  let fixture: ComponentFixture<AveragePerMinuteCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AveragePerMinuteCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AveragePerMinuteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
