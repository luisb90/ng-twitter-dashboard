import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';

import { AppComponent } from './app.component';
import { TwitterStoreModule } from './store';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, TwitterStoreModule],
  providers: [PubNubAngular],
  bootstrap: [AppComponent]
})
export class AppModule {}
