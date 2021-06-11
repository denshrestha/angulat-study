import { Injectable } from '@angular/core';
import {Film, FilmDetails} from "./films.model";
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  result: Film[] = []
  token: String = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGZkYThlYTgyYmU5ZjM4NDkzODljMTAzYWQzYjQyNyIsInN1YiI6IjVlMTBhZDczNTgzNjFiMDAxMmMyNDMxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UImMXcCiV2bQ2ta8YmXtQJqMfrunX2jUBtDKjzVFeBA'
  url: String = 'https://api.themoviedb.org/3'
  filmDetails: FilmDetails | undefined
  constructor(private http: HttpClient) { }


  getResults(){
    return this.result
  }

  fetchProducts(query: String, page: Number){
    return this.http.get<Film[]>(`${this.url}${query}?page=${page}`, {
      observe: "response",
      responseType: 'json',
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).pipe(
      map((resp:any) => {
        console.log(resp)
        const {body} = resp
        return body.results || body
      }),
      tap((resp) => {
        this.setResponseData(resp)
      })
    )
  }

  getFilmDetails(query: String){
    return this.http.get(`${this.url}${query}`, {
      observe: "response",
      responseType: 'json',
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).pipe(
      map((resp: any) => {
        const {body} = resp
        return body
      }),
      tap((resp)=>{
        this.setFilmDetails(resp)
      })
    )
  }

   getConfiguration(){
     return this.http.get(`${this.url}/configuration`,{
      observe: "response",
      responseType: 'json',
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).pipe(
      map((resp: any) => {
        const {body} = resp
        console.log(body)
        return body
      })
    )
  }

  getMovieReview(query: Number){
    return this.http.get(`${this.url}/movie/${query}/reviews`, {
      observe: "response",
      responseType: 'json',
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).pipe(
      map((resp: any) => {
        const {body} = resp
        return body.results
      })
    )
  }

  setFilmDetails(response: FilmDetails){
    this.filmDetails = response
  }

  setResponseData(response: Film[]){
    this.result = response
  }
}
