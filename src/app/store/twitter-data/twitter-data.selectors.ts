import { createFeatureSelector } from '@ngrx/store';
import { TwitterDataState } from './twitter-data.reducer';

export const selectMessagesState = createFeatureSelector<TwitterDataState>('messages');
