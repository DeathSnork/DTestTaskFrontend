import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {User} from '../model/user.model';
import {Address} from '../model/address.model';

@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetuserComponent implements OnInit {

  user: User

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.user = new User();
    this.user.address = new Address();
  }

  getUser(id: string) {
    return this.dataService.getUser(id)
      .subscribe(data => this.user = data)
  }

}
