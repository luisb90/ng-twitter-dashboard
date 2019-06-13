import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfTweetsCardComponent } from './number-of-tweets-card.component';

describe('NumberOfTweetsCardComponent', () => {
  let component: NumberOfTweetsCardComponent;
  let fixture: ComponentFixture<NumberOfTweetsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberOfTweetsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOfTweetsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
