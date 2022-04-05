import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

import { Furniture } from 'src/app/_intefaces/furniture';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getArticles(){
    return this.http.get<Furniture[]>('http://localhost:3000/getArticles')
  }

  getCategories(){
    return this.http.get<Furniture[]>('http://localhost:3000/getCategories')
  }

  consultCategory(category: number){
    return this.http.post<Furniture[]>('http://localhost:3000/consultCategory', {category}).pipe()
  }
 
  billing(cartList: Furniture[], total: number, clientId: number){

    let itemIdList = []

    for(let x = 0; x < cartList.length; x++){
      itemIdList.push(cartList[x].id)
    }

    const bill = {
      clientId,
      itemIdList,
      total
      
    }
    return this.http.post<any>('http://localhost:3000/billing',{bill}).pipe() 
  }

}
