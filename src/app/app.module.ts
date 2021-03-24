import { AuthenticationServiceService } from './authentication-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DocumentListComponent,
    DocumentDetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,
    HttpClientModule,
    MatSidenavModule
  ],
  providers: [
   // {provide:HTTP_INTERCEPTORS, useClass:AuthenticationServiceService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
