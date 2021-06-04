import { Injectable } from '@angular/core';
import {Product} from "./shopping/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  items: Product[] = []

  constructor() {
    const item = new Product('dvsdv', 'sfbfdsbd', 455, '$', 'segsrg', 'khvjhvbj')
    this.items.push(item)
    console.log(this.items)
  }

  getProducts(){
    return this.items
  }
}
