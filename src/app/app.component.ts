import { Component, Output } from '@angular/core';
import { Furniture } from './_intefaces/furniture';

import { DatabaseService } from './_services/database/database.service';
import { CartService } from './_services/cart/cart.service';
import { Categories } from './_intefaces/categoies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Muebleria';

  articles?: Furniture[];
  categories?: Categories[];
  cartLength: number = 0;


  constructor(
    private db: DatabaseService,
    private cart: CartService
    ) { }

  ngOnInit(): void {
    this.db.getArticles().subscribe(x => this.articles = x)
    this.db.getCategories().subscribe(x => this.categories = x)
  }

  addItemToCart(newItem: Furniture | any){
    console.log(newItem)
    this.cart.cartList?.push(newItem)
    this.cart.total += newItem.price
    this.cartLength = this.cart.cartList.length
  }
  
  consultItems(category: number | any){
    console.log(category)
    this.db.consultCategory(category).subscribe(x => this.articles = x)
  }

}
