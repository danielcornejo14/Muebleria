import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


import { Furniture } from '../_intefaces/furniture';

import { CartService } from '../_services/cart/cart.service';
import { DatabaseService } from '../_services/database/database.service';




@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  total: number = this.cart.total;
  buyingList: Furniture[] = this.cart.cartList
  clientId!: number;

  constructor(
    private sanitizer: DomSanitizer,
    private cart: CartService,
    private db: DatabaseService
  ) { }

  ngOnInit(): void {
    this.total = this.cart.total
  }

  sanitizeImage(imageUrl: string){
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl)
  }

  buyItems(){
    this.db.billing(this.buyingList, this.total, this.clientId).subscribe(x => console.log(x))
  }

}
