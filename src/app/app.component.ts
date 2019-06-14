import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { SetSelectedHashtag, InitializeStream } from './store/twitter-data/twitter-data.actions';
import { State } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Twitter Dashboard';

  constructor(private store: Store<State>) {
    this.setSelectedHashtag('a');
    // this.store.dispatch(new InitializeStream());
  }

  public setSelectedHashtag(hashtag: string) {
    if (hashtag) {
      this.store.dispatch(new SetSelectedHashtag({ hashtag }));
    }
  }
}
