import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MATERIAL_COMPATIBILITY_MODE,
  MatCheckboxModule
 } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  exports: [
    MatCheckboxModule
  ],
  providers: [
    { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }
  ],
  declarations: []
})
export class MaterialModule { }
