import { Component } from '@angular/core';
import WishItem from '../shared/model/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'wishlist-app';
  newWishItemText!: string;
  selectStatus: string = '0';

  wishlist: WishItem[] = [
    new WishItem('Learn Typescript', true, new Date()),
    new WishItem('Learn Node', false, new Date()),
    new WishItem('Learn Angular', false, new Date()),
  ];

  visibleWishlist: WishItem[] = this.getVisibleWishlist(this.selectStatus);

  getVisibleWishlist(value: string): WishItem[] {
    console.log('Changing Selection:', value);
    if (value === '1') {
      return this.wishlist.filter((wi) => !wi.isComplete);
    } else if (value === '2') {
      return this.wishlist.filter((wi) => wi.isComplete);
    } else {
      return this.wishlist;
    }
  }

  addAnotherWishItem(wishText: String) {
    console.log('Adding Another WishItem!', wishText);
    let wishItem = new WishItem(wishText, false, new Date());
    this.wishlist.unshift(wishItem);
    this.visibleWishlist = this.getVisibleWishlist(this.selectStatus);
  }

  toggleWishList(e: WishItem) {
    console.log('toggle clicked!', e);
    e.isComplete = !e.isComplete;
    console.log('post toggle', e);
  }

  filterChanged(value: string) {
    console.log('Changing selection', value);
    this.visibleWishlist = this.getVisibleWishlist(value);
  }
}
