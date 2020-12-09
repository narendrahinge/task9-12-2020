import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'add-user',
    templateUrl: 'add-user.html',
    styleUrls: ['add-user.css']
  })
  export class AddUsercomponentDialog {
    
    langList = [
        { inx: 1, lang: 'marathi' },
        { inx: 2, lang: 'english' },
        { inx: 3, lang: 'hindi' }
      ];

      dropdownSettings = {
        singleSelection: false,
        idField: 'inx',
        textField: 'lang',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: true
      };



    constructor(
      public dialogRef: MatDialogRef<AddUsercomponentDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    onItemSelect(item: any) {
        
    }

  
  }