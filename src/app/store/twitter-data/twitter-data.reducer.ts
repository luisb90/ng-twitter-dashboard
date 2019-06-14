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
        if (draft.selectedHashtag) {
          draft.tweetCount[draft.selectedHashtag] = 0;
        }

        draft.selectedHashtag = action.payload.hashtag;
        draft.tweetCount[action.payload.hashtag] =
          draft.tweetCount[action.payload.hashtag] || 0;
        draft.countryCodeData = {};
        return;
      }

      case TwitterDataActionTypes.PROCESS_TWEET: {
        const tweet = action.payload.tweet;
        const countryCode: string = tweet.place && tweet.place.country_code;

        draft.tweetCount[action.payload.hashtag]++;
        if (countryCode) {
          draft.countryCodeData[countryCode] =
            draft.countryCodeData[countryCode] || 0;
          draft.countryCodeData[countryCode]++;
        }
        return;
      }
    }
  },
  initialState
);
