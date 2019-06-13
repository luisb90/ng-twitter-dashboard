import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { State } from '../../../store';
import { selectHashtagTweetCount } from '../../../store/twitter-data/twitter-data.selectors';

@Component({
  selector: 'app-number-of-tweets-card',
  templateUrl: './number-of-tweets-card.component.html',
  styleUrls: ['./number-of-tweets-card.component.scss']
})
export class NumberOfTweetsCardComponent implements OnInit {
  public selectedHashtagTweetCount$: Observable<number>;
  constructor(private store: Store<State>) {
    this.selectedHashtagTweetCount$ = this.store.select(selectHashtagTweetCount);
  }

  ngOnInit() {}
}
