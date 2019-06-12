import { TwitterDataActionsUnion } from './twitter-data.actions';

export interface TwitterDataState {
  tweetCount: { [hashtag: string]: number };
  countryCodeData: { [countryCode: string]: number };
  selectedHashtag: string;
}

export const initialState = {
  tweetCount: { '': 0 },
  countryCodeData: {},
  selectedHashtag: ''
};

export function twitterDataReducer(state = initialState, action: TwitterDataActionsUnion): TwitterDataState {
  return state;
}
