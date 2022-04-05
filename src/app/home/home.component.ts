import { Component, Input, OnInit, Output, EventEmitter, SimpleChange} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Categories } from '../_intefaces/categoies';

import { Furniture } from '../_intefaces/furniture';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  @Input() articles?: Furniture[];
  @Input() categories?: Categories[];
  @Output() buyArticleEmitter = new EventEmitter<Furniture>();
  @Output() consultCategory = new EventEmitter<number>();

  selectedCategory?: number;

  constructor(
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    
  }

  sanitizeImage(imageUrl: string){
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl)
  }

  buyItem(value: Furniture | any){
    this.buyArticleEmitter?.emit(value);
  }

  consultItems(){

    this.consultCategory?.emit(this.selectedCategory)

  }


}
