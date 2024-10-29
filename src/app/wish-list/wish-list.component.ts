import { Component } from '@angular/core';
import WishItem from './model/wishItem';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
})
export class WishListComponent {
  wishItemParent!: WishItem;

  addWishListToParent(wishItem: WishItem) {
    this.wishItemParent = wishItem;
    console.log('wishItemParent: ', wishItem);
  }
}
