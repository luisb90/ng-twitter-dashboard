import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import {
  selectSelectedHashtag,
  selectHashtagTweetCount,
  selectTweetAveragePerMin,
  selectCountryCodeDataArray
} from '../../store/twitter-data/twitter-data.selectors';
import { State } from '../../store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  public selectedHashtag$: Observable<string>;
  public selectedHashtagTweetCount$: Observable<number>;
  public selectedHashtagAvgPerMin$: Observable<number>;
  public chartData$: Observable<{ name: string; value: number }[]>;

  constructor(private store: Store<State>) {}

  public ngOnInit() {
    this.selectedHashtag$ = this.store.select(selectSelectedHashtag);
    this.selectedHashtagTweetCount$ = this.store.select(
      selectHashtagTweetCount
    );
    this.selectedHashtagAvgPerMin$ = this.store.pipe(selectTweetAveragePerMin);
    this.chartData$ = this.store.select(selectCountryCodeDataArray);
  }
}
