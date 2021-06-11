import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {FilmsComponent} from "./films/films.component";
import {FilmDetailsComponent} from "./film-details/film-details.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'todo-list', component:TodoListComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'films/:id', component: FilmDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
