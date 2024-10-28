import { Component } from '@angular/core';
import WishItem from '../model/wishItem';

@Component({
  selector: 'app-display-wish-list',
  templateUrl: './display-wish-list.component.html',
  styleUrl: './display-wish-list.component.css',
})
export class DisplayWishListComponent {
  selectedWishListItem: String = '0';
  wishItemList: WishItem[] = [
    new WishItem(1, 'Learning TS', false, new Date(), new Date()),
    new WishItem(2, 'Learning Node', false, new Date(), new Date()),
    new WishItem(3, 'Learning Angular', false, new Date(), new Date()),
  ];

  onClickComplete(wishItemCompleted: WishItem) {
    console.log(wishItemCompleted.wishId);
    this.wishItemList
      .filter((i) => i.wishId === wishItemCompleted.wishId)
      .map((i) => (i.isCompleted = !i.isCompleted));
  }

  displayWishListItem(): WishItem[] {
    if (this.selectedWishListItem === '1') {
      return this.wishItemList.filter((i) => i.isCompleted === false);
    }
    if (this.selectedWishListItem === '2') {
      return this.wishItemList.filter((i) => i.isCompleted === true);
    } else {
      return this.wishItemList;
    }
  }
}
