import {Component} from "@angular/core";
import { Router} from "@angular/router";

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

  constructor ( private router: Router ) {
    console.log(this.router.url)
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
      .then(()=>{
        this.currentPath = this.router.url
        console.log(this.currentPath)
      })
  }

}
