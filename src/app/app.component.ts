import { Component } from '@angular/core';
import { Musteri } from './musteri.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DataTableComponent} from './data-table/data-table.component';
import { Guid } from 'guid-typescript';
import { RequestsService } from './services/requests.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   *
   */
  constructor(private request:RequestsService) {
  }

}
