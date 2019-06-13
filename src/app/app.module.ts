import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { TwitterStoreModule } from './store';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TwitterStoreModule,
    MatInputModule,
    MatDividerModule
  ],
  providers: [PubNubAngular],
  bootstrap: [AppComponent]
})
export class AppModule {}
