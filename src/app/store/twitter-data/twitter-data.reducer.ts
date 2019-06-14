import produce from 'immer';

import {
  TwitterDataActionsUnion,
  TwitterDataActionTypes
} from './twitter-data.actions';

export interface TwitterDataState {
  tweetCount: { [hashtag: string]: number };
  countryCodeData: { [countryCode: string]: number };
  selectedHashtag: string;
}

export const initialState = {
  tweetCount: {},
  countryCodeData: {},
  selectedHashtag: ''
};

export const twitterDataReducer = produce(
  (draft: TwitterDataState, action: TwitterDataActionsUnion) => {
    switch (action.type) {
      case TwitterDataActionTypes.SET_SELECTED_HASHTAG: {
        draft.selectedHashtag = action.payload.hashtag;
        draft.tweetCount[action.payload.hashtag] =
          draft.tweetCount[action.payload.hashtag] || 0;
        draft.countryCodeData = {};
        return;
      }

      case TwitterDataActionTypes.PROCESS_TWEET: {
        draft.tweetCount[action.payload.hashtag]++;
        return;
      }
    }
  },
  initialState
);
