import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { pipe } from 'rxjs';
import { bufferTime, pairwise, map, startWith, skip } from 'rxjs/operators';

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

export const selectCountryCodeData = createSelector(
  selectMessagesState,
  state => state.countryCodeData
);

export const selectHashtagTweetCount = createSelector(
  selectTweetCount,
  selectSelectedHashtag,
  (tweetCount, hashtag: string) => tweetCount[hashtag]
);

export const selectCountryCodeDataArray = createSelector(
  selectCountryCodeData,
  countryCodeData => {
    return Object.keys(countryCodeData).map(countryCode => {
      return { name: countryCode, value: countryCodeData[countryCode] };
    });
  }
);

export const selectHashtagHistory = createSelector(
  selectTweetCount,
  tweetCount => Object.keys(tweetCount)
);

export const selectTweetAveragePerMin = pipe(
  select(selectHashtagTweetCount),
  skip(1),
  bufferTime(1000),
  pairwise(),
  map(buffer => (buffer[0].length + buffer[1].length) * 30)
);
