import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {


  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: {title: string, content: string}
    ) { }

  ngOnInit(): void {
  }

  onCloseDialog(){
    this.dialog.closeAll();
  }

}
