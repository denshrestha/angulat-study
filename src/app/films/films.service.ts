import { Injectable } from '@angular/core';
import {Show} from "./films.model";
import {HttpClient} from "@angular/common/http";
import {debounceTime, map, tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  result: Show[] = []
  constructor(private http: HttpClient) { }


  getResults(){
    return this.result
  }

  fetchProducts(url: any, query: any){
    return this.http.get(url, {
      observe: "response",
      responseType: 'json',
      params: {q: query},
      headers: {
        'x-rapidapi-key': 'bb49079d34mshf6e73afeabd3ad9p14839djsn8dcd3e5ee95f',
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
      }
    }).pipe(
      debounceTime(200),
      map((resp:any) => {
        const {body} = resp
        return Object.keys(body).map((item: any)=>{
          if(item === 'd'){
            return body[item]
          }
          return
        })
      }),
      tap(resp => {
        this.setResponseData(resp[0])
      })
    )
  }

  setResponseData(response: any){
    this.result = response.map((item: any)=>{
      const {id, l, q, rank, s, y, yr, i} = item
      return new Show(id, l, q, rank, s, y, yr, i)
    })
  }
}
