import {Component, Input, OnInit} from '@angular/core';
import {ReviewModule} from "../film-details/review.module";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  @Input() comments: ReviewModule[] | undefined = []

  constructor() { }

  ngOnInit(): void {
  }

  getAvatar(avatarUrl: any){
    if(avatarUrl){
      return avatarUrl.includes('http') ?
        avatarUrl.substring(1) : 'https://image.tmdb.org/t/p/original'+avatarUrl
    }

    return 'https://merics.org/sites/default/files/styles/ct_team_member_default/public/2020-04/avatar-placeholder.png?itok=Vhm0RCa3'
  }

}
