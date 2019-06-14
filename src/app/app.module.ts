import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { TwitterStoreModule } from './store';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DataDisplayCardComponent } from './modules/dashboard/data-display-card/data-display-card.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, DataDisplayCardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TwitterStoreModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [PubNubAngular],
  bootstrap: [AppComponent]
})
export class AppModule {}
