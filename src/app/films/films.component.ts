import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FilmsService} from "./films.service";
import {Film} from "./films.model";

@Component({
  selector: 'app-shopping',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  data: Film[] = []
  err: any
  query: String = '/movie/top_rated'
  page: number = 1

  constructor(
    private http: HttpClient,
    private api: FilmsService
  ) { }

  ngOnInit(): void {
    this.data = this.api.getResults()
  }

  search(){
    if(this.query){
      this.api.fetchProducts(this.query, this.page)
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

  prevPage(){
    if(this.page > 1){
      this.page--
      this.search()
      return
    }
  }

  nextPage(){
    this.page++
    this.search()
  }

}
