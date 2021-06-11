import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FilmsService} from "../films/films.service";
import {FilmDetails} from "../films/films.model";
import {ReviewModule} from "./review.module";

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {

  movieId: Number = 0
  movieData: FilmDetails | undefined
  movieBGImage: String | undefined
  moviePoster: String | undefined
  reviews?: ReviewModule[]

  constructor(
    private route: ActivatedRoute,
    private api: FilmsService
  ) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.params.id
    // this.api.getConfiguration().subscribe()
    if(this.movieId){
      this.api.getFilmDetails(`/movie/${this.movieId}`).subscribe((resp)=>{
        this.setRespData(resp)
      })
      this.api.getMovieReview(this.movieId).subscribe((resp)=>{
        this.reviews = resp
      })
    }
  }

  setRespData(resp: any){
    this.movieData = resp
    this.movieBGImage = 'url(https://image.tmdb.org/t/p/original'+resp.backdrop_path+')'
    this.moviePoster = 'https://image.tmdb.org/t/p/original'+resp.poster_path
  }

  getCompanyLogo(logo:any){
    if(logo){
      return 'https://image.tmdb.org/t/p/original'+logo
    } else {
      return 'https://merics.org/sites/default/files/styles/ct_team_member_default/public/2020-04/avatar-placeholder.png?itok=Vhm0RCa3'
    }
  }
}
