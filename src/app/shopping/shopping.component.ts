import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  category: String = 'aps'
  keyword: String = 'iphone'
  country: String = 'US'
  apiKey: String = 'bb49079d34mshf6e73afeabd3ad9p14839djsn8dcd3e5ee95f'
  url: any = ''
  data: any
  err: any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.url = `https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=${this.keyword}&country=${this.country}&category=${this.category}`
    this.fetchProducts()
    console.log(this.fetchProducts())
    console.log(this.data)
    console.log(this.err)
  }

  fetchProducts(){
    return this.http.get(this.url, {
      observe: "response",
      responseType: 'json',
      headers: {
        "x-rapidapi-key": "bb49079d34mshf6e73afeabd3ad9p14839djsn8dcd3e5ee95f",
        "x-rapidapi-host": "amazon-product-reviews-keywords.p.rapidapi.com"
      }
    }).subscribe((data: any) => this.data = data)
  }
}
