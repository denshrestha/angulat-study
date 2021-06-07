import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FilmsService} from "./films.service";
import {Show} from "./films.model";

@Component({
  selector: 'app-shopping',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  data: Show[] = []
  err: any
  query: String = 'game of thr'

  constructor(
    private http: HttpClient,
    private api: FilmsService
  ) { }

  ngOnInit(): void {

  }

  search(){
    this.api.fetchProducts('https://imdb8.p.rapidapi.com/auto-complete', this.query)
      .subscribe(()=>{
          this.data = this.api.getResults()
          console.log('data', this.data)
        },
        (e) => {
          this.err = e
          console.log('ERROR', this.err)
          this.data = []
        })
  }


}
