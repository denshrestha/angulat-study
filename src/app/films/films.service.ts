import { Injectable } from '@angular/core';
import {Show} from "./films.model";
import {HttpClient} from "@angular/common/http";
import {debounceTime, map, tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  result: Show[] = []
  token: String = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGZkYThlYTgyYmU5ZjM4NDkzODljMTAzYWQzYjQyNyIsInN1YiI6IjVlMTBhZDczNTgzNjFiMDAxMmMyNDMxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UImMXcCiV2bQ2ta8YmXtQJqMfrunX2jUBtDKjzVFeBA'
  url: String = 'https://api.themoviedb.org/3'
  constructor(private http: HttpClient) { }


  getResults(){
    return this.result
  }

  fetchProducts(query: any){
    return this.http.get(this.url + query, {
      observe: "response",
      responseType: 'json',
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).pipe(
      debounceTime(200),
      map((resp:any) => {
        const {body} = resp
        console.log(body, resp)
        // return Object.keys(body).map((item: any)=>{
        //   if(item === 'results'){
        //     return body[item]
        //   }
        //   return
        // })
      }),
      // tap((resp) => {
      //   this.setResponseData(resp[0])
      // })
    )
  }

  setResponseData(response: Show[]){
    this.result = response
    console.log('result', this.result)
  }
}
