import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  { path: 'home', component: TodolistComponent },
  { path: 'next', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
