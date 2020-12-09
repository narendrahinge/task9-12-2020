import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  malecount : any;
  femalecount : any;
  constructor(
    private userlist: UserComponent
  ) { 
    this.malecount = this.userlist.count.male.length;
    this.femalecount =  this.userlist.count.female.length;
  }

  ngOnInit() {
  }

}
