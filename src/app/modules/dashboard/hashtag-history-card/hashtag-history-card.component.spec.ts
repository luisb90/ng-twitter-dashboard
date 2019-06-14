import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagHistoryCardComponent } from './hashtag-history-card.component';

describe('HashtagHistoryCardComponent', () => {
  let component: HashtagHistoryCardComponent;
  let fixture: ComponentFixture<HashtagHistoryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashtagHistoryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagHistoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
