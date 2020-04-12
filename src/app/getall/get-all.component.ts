import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {User} from '../model/user.model';

@Component({
  selector: 'app-getall',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {
  users$: User[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getUsers()
      .subscribe(data => this.users$ = data);
  }
}
