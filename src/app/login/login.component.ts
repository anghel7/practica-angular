import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'sky-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = '';
  password = '';


  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.userName === 'test' && this.password === 'test') {
      this.router.navigate(['dashboard']);
    } else {
      this.openDialog();
    }
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '300px',
      data: { userName: this.userName, password: '*********' }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      const animal = result;
    });
  }

}
