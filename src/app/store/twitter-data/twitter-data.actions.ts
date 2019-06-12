import { Action } from '@ngrx/store';

export class PlaceholderAction implements Action {
  readonly type = 'placeholder';
}

export type TwitterDataActionsUnion = PlaceholderAction;
