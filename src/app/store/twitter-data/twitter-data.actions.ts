import { Action } from '@ngrx/store';

export enum TwitterDataActionTypes {
  SET_SELECTED_HASHTAG = '[User] Set Selected Hashtag'
}

export class SetSelectedHashtag implements Action {
  readonly type = TwitterDataActionTypes.SET_SELECTED_HASHTAG;

  constructor(readonly payload: { hashtag: string }) {}
}

export type TwitterDataActionsUnion = SetSelectedHashtag;
