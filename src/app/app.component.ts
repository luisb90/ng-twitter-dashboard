import { Component } from '@angular/core';
import { DataStreamService } from './services/data-stream.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Twitter dashboard';

  constructor(public streamService: DataStreamService) {
    // streamService.initMessageStream();
  }
}
