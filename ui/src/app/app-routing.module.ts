import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { LoanComponent } from './loan/loan.component';
import { PublisherComponent } from './publisher/publisher.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [  {
  path : 'books',
  component : BookComponent,
},
{
  path : 'admins',
  component : AdminComponent
},
{
  path : 'authors',
  component : AuthorComponent
},
{
  path : 'students',
  component : StudentComponent
},
{
  path : 'loans',
  component : LoanComponent
},
{
  path : 'publishers',
  component : PublisherComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }