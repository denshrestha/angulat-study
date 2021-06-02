import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  title: String
  description: String
  imageUrl: String
  date: Date

  constructor() {
    this.title = 'Home page'
    this.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci at aut beatae commodi consequuntur cumque ea eaque exercitationem facilis fugit harum, inventore itaque maiores modi non perspiciatis quas quidem ratione sapiente sed sint tempora ullam ut velit voluptatem voluptates.'
    this.imageUrl = 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'
    this.date = new Date()
  }

  ngOnInit(): void {
  }

}
