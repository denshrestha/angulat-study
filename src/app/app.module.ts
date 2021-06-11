import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { HelpModalComponent } from "./help-modal/help-modal.component";
import {MainComponent} from "./main/main.component";
import {SidebarComponent} from "./main/sidebar/sidebar.component";
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './main/content/content.component';
import { TodoListComponent } from './todo-list/todo-list.component';


import {TodoListService} from "./todo-list/todo-list.service";
import { CreateTodoPopupComponent } from './todo-list/create-todo-popup/create-todo-popup.component';
import {FormsModule} from "@angular/forms";
import { FilmsComponent } from './films/films.component';
import {HttpClientModule} from "@angular/common/http";
import { FilmGalleryComponent } from './film-gallery/film-gallery.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HelpModalComponent,
    MainComponent,
    SidebarComponent,
    HomeComponent,
    ContentComponent,
    TodoListComponent,
    CreateTodoPopupComponent,
    FilmsComponent,
    FilmGalleryComponent,
    FilmDetailsComponent,
    ReviewsComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
    ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
