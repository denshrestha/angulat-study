import {Component, Input} from '@angular/core';
import {Film} from "../films/films.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-film-gallery',
  templateUrl: './film-gallery.component.html',
  styleUrls: ['./film-gallery.component.scss']
})

export class FilmGalleryComponent {

  @Input() gallery: Film[] = []

  constructor(private router: Router) {
  }

  getVoteColor(vote: Number): String{
    return vote <= 3 ? 'color: red' :
      vote <= 8 ? 'color: orange' : 'color: green'
  }

  openMovieDetails(id: Number){
    this.router.navigate([`films/${id}`, {id: id}])
  }
}
