import { DocumentDetailsComponent } from './document-details/document-details.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:'documentList', component:DocumentListComponent},
  {path:'documentdetails',component:DocumentDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
