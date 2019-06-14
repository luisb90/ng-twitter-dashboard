import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { PieChartModule } from '@swimlane/ngx-charts';
import { PubNubAngular } from 'pubnub-angular2';

import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DataDisplayCardComponent } from './modules/dashboard/data-display-card/data-display-card.component';
import { PieChartCardComponent } from './modules/dashboard/pie-chart-card/pie-chart-card.component';
import { TwitterStoreModule } from './store';

@NgModule({
  declarations: [AppComponent, DashboardComponent, DataDisplayCardComponent, PieChartCardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TwitterStoreModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    PieChartModule
  ],
  providers: [PubNubAngular],
  bootstrap: [AppComponent]
})
export class AppModule {}
