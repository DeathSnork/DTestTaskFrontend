import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data.service';
import {User} from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'TestTaskUI';
}
