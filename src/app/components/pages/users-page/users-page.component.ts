import { Component, OnInit } from '@angular/core';
import { User } from '../../../data-model/user';
import{HttpServiceService} from  '../../../services/http-service.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  users:User[];

  constructor(private httpService:HttpServiceService) { 
  
  }

  ngOnInit(): void {
    this.httpService.fetchUsers().subscribe(data=>{ 
      this.users = data;
      console.log(this.users);
    });
   
  }

}
