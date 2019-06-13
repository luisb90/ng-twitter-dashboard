import { Injectable } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { TwitterMessage, Hashtag } from '../models/twitter-message';
import { State } from '../store';
import { selectSelectedHashtag } from '../store/twitter-data/twitter-data.selectors';
import { ProcessTweet } from '../store/twitter-data/twitter-data.actions';

@Injectable({
  providedIn: 'root'
})
export class DataStreamService {
  private channel = 'pubnub-twitter';
  private hashtag: string;
  private subs: Subscription[] = [];

  constructor(private twitterPubNub: PubNubAngular, private store: Store<State>) {
    this.subs.push(
      store.select(selectSelectedHashtag).subscribe(hashtag => {
        this.hashtag = hashtag;
      })
    );
  }

  public initMessageStream() {
    this.twitterPubNub.init({
      subscribeKey: 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe'
    });

    this.twitterPubNub.addListener({
      message: (data: any) => {
        this.processTweet(data);
      }
    });

    this.twitterPubNub.subscribe({
      channels: [this.channel]
    });
  }

  private processTweet(data: any) {
    const tweet: TwitterMessage = data.message;

    if (this.hashtag && this.hasHashtag(tweet)) {
      this.store.dispatch(new ProcessTweet({ hashtag: this.hashtag, tweet }));
    } else if (!this.hashtag && !tweet.entities.hashtags.length) {
      this.store.dispatch(new ProcessTweet({ hashtag: this.hashtag, tweet }));
    }
  }

  private hasHashtag(tweet: TwitterMessage) {
    return (
      tweet.text.toLowerCase().includes(this.hashtag.toLowerCase()) ||
      tweet.entities.hashtags.find(h => h.text.toLowerCase() === this.hashtag.toLowerCase())
    );
  }
}