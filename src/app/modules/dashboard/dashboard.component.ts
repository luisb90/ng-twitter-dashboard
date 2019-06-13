import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { selectSelectedHashtag } from '../../store/twitter-data/twitter-data.selectors';
import { State } from '../../store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public selectedHashtag$: Observable<string>;

  constructor(private store: Store<State>) {
    this.selectedHashtag$ = this.store.select(selectSelectedHashtag);
  }
}
