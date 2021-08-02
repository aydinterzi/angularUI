import { Component } from '@angular/core';
import { Musteri } from './musteri.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DataTableComponent} from './data-table/data-table.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  musteri:Musteri=new Musteri();

}
