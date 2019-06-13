import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TwitterDataActionTypes } from './twitter-data.actions';
import { DataStreamService } from '../../services/data-stream.service';
import { EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TwitterDataEffects {
  @Effect({ dispatch: false })
  initializeStream$ = this.actions$.pipe(
    ofType(TwitterDataActionTypes.INITIALIZE_STREAM),
    tap(() => this.dataStreamService.initMessageStream()),
    catchError(() => {
      console.log('An error ocurred while initializing the stream.');
      return EMPTY;
    })
  );

  constructor(private actions$: Actions, private dataStreamService: DataStreamService) {}
}
