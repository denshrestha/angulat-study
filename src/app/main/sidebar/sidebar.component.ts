import {Component} from "@angular/core";
import { Router} from "@angular/router";
import { Location } from "@angular/common";

export interface NavItem {
  name: String,
  path: String
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent{

  constructor ( private router: Router, location: Location ) {
    router.events.subscribe(() => {
      if (location.path() != "") {
        this.currentPath = location.path();
      } else {
        this.currentPath = "/";
      }
    });
  }

  currentPath: String = this.router.url || ''

  navigation: NavItem[] = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Todo list',
      path: '/todo-list'
    },
    {
      name: 'Shopping cards',
      path: '/shopping-cards'
    },
    {
      name: 'Chart',
      path: '/chart'
    },
  ]

  changeRoute(item: NavItem){
    this.router.navigate([item.path])
  }

}
