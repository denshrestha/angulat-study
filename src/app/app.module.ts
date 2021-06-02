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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HelpModalComponent,
    MainComponent,
    SidebarComponent,
    HomeComponent,
    ContentComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
