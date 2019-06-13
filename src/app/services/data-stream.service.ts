import { Injectable } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';
import { TwitterMessage } from '../models/twitter-message';

@Injectable({
  providedIn: 'root'
})
export class DataStreamService {
  private channel = 'pubnub-twitter';

  constructor(private twitterPubNub: PubNubAngular) {}

  public initMessageStream() {
    this.twitterPubNub.init({
      subscribeKey: 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe'
    });

    this.twitterPubNub.addListener({
      message: (data: any) => {
        const tweet: TwitterMessage = data.message;
        console.log('test log tweet data:', tweet);
      }
    });

    this.twitterPubNub.subscribe({
      channels: [this.channel]
    });
  }
}
