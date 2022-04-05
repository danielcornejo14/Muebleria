import { Injectable } from '@angular/core';
import { Furniture } from 'src/app/_intefaces/furniture';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cartList: Furniture[] = []
  total: number = 0;

  constructor() { }
}
