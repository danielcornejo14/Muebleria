import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { BillingComponent } from '../billing/billing.component';
import { CartService } from '../_services/cart/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() articleAmount: number = 0;

  showBadge?: boolean = true;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    if(this.articleAmount > 0){
      this.showBadge = false

    }
  }

  ngOnChanges(changes: SimpleChange){
    if(this.articleAmount > 0){
      this.showBadge = false

    }

  }

  openBilling(): void{
    const billing = this.dialog.open(BillingComponent,{
      width: '1440px'
    })
  }

}
