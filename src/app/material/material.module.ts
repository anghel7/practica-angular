import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MATERIAL_COMPATIBILITY_MODE,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatDialogModule,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }
  ],
  declarations: []
})
export class MaterialModule { }
