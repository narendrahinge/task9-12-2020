import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddUsercomponentDialog } from '../modals/adduser.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userlist = [
    {name:"narendra", dob:"13/11/1993", lang: "Marathi", gender:"male", about:"hello text" },
    {name:"Ganesh", dob:"13/11/1993", lang: "Marathi", gender:"male", about:"hello text" },
    {name:"Raj", dob:"13/11/1993", lang: "Marathi", gender:"male", about:"hello text" },
    {name:"Omkar", dob:"13/11/1993", lang: "Marathi", gender:"male", about:"hello text" },
    {name:"Pankaj", dob:"13/11/1993", lang: "Marathi", gender:"male", about:"hello text" },
    {name:"Vidya", dob:"13/11/1993", lang: "Marathi", gender:"female", about:"hello text" },

  ]
  count: any;
  constructor(
    public dialog: MatDialog
  ) {
    this.count = this.groupArrayOfObjects(this.userlist, "gender");
  }

  ngOnInit() {
    this.userlist.push({name:"Vidya", dob:"13/11/1993", lang: "Marathi", gender:"female", about:"hello text" });
  }


  openDialog(): void {
    var userdata = {name:"", dob:"", lang: "", gender:"", about:"" }
    const dialogRef = this.dialog.open(AddUsercomponentDialog, {
      width: '450px',
      data: { userdata: userdata }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userlist.push(result);
      this.count  = this.groupArrayOfObjects(this.userlist, "gender");
      console.log(this.userlist)
    });
  }


  groupArrayOfObjects(list, key) {
    return list.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };



}
