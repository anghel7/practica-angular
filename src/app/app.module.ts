import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DialogOverviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    DashboardModule
  ],
  entryComponents: [
    DialogOverviewComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
