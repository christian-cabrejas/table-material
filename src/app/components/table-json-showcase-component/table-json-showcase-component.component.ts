import { Component } from '@angular/core';
import  UsersJson from 'src/app/users.json';

interface USERS{
  id: Number;
  first_name: String;
  last_name: String;
  email: String;
  gender: String;
  avatar: String;
  age: Number;
}

@Component({
  selector: 'app-table-json-showcase-component',
  templateUrl: './table-json-showcase-component.component.html',
  styleUrls: ['./table-json-showcase-component.component.scss']
})
export class TableJsonShowcaseComponentComponent {

  Users: USERS[] = UsersJson;


}
