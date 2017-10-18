import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'sky-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css']
})
export class DialogOverviewComponent implements OnInit {
  userName;
  password;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
      this.userName = data.userName;
      this.password = data.password;
  }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
