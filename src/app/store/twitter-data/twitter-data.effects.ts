import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable({
  providedIn: 'root'
})
export class TwitterDataEffects {
  constructor(private actions$: Actions) {}
}
