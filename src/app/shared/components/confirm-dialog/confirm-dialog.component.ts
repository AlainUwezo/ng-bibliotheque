import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    public dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: {title: string, content: string}
    ) { }

  ngOnInit(): void {
  }

  onConfirmDialog(){
    this.dialog.closeAll();
  }
}
