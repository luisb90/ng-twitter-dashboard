import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  SetSelectedHashtag,
  InitializeStream
} from './store/twitter-data/twitter-data.actions';
import { State } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Twitter dashboard';

  constructor(private store: Store<State>) {
    this.setSelectedHashtag('and');
    this.store.dispatch(new InitializeStream());
  }

  public setSelectedHashtag(hashtag: string) {
    if (hashtag) {
      this.store.dispatch(new SetSelectedHashtag({ hashtag }));
    }
  }
}
