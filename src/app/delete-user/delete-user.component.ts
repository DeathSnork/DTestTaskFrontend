import { Component, OnInit } from '@angular/core';
import {User} from '../model/user.model';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {



  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

}
