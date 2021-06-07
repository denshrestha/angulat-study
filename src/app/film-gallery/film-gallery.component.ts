import {Component, Input} from '@angular/core';
import {Show} from "../films/films.model";

@Component({
  selector: 'app-film-gallery',
  templateUrl: './film-gallery.component.html',
  styleUrls: ['./film-gallery.component.scss']
})

export class FilmGalleryComponent {

  @Input() gallery: Show[] = []


}
