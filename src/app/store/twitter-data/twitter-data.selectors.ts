import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TwitterDataState } from './twitter-data.reducer';

export const selectMessagesState = createFeatureSelector<TwitterDataState>('twitterData');

export const selectSelectedHashtag = createSelector(
  selectMessagesState,
  state => state.selectedHashtag
);
