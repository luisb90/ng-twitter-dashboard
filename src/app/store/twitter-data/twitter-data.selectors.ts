import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { pipe } from 'rxjs';
import { bufferTime, pairwise, map } from 'rxjs/operators';

import { TwitterDataState } from './twitter-data.reducer';

export const selectMessagesState = createFeatureSelector<TwitterDataState>(
  'twitterData'
);

export const selectSelectedHashtag = createSelector(
  selectMessagesState,
  state => state.selectedHashtag
);

export const selectTweetCount = createSelector(
  selectMessagesState,
  state => state.tweetCount
);

export const selectHashtagTweetCount = createSelector(
  selectTweetCount,
  selectSelectedHashtag,
  (tweetCount, hashtag: string) => tweetCount[hashtag]
);

export const selectRunningAverage = pipe(
  select(selectHashtagTweetCount),
  bufferTime(1000),
  pairwise(),
  map(buffer => (buffer[0].length + buffer[1].length) * 30)
);
