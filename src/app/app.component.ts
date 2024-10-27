import { Component } from '@angular/core';
import WishItem from '../shared/model/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  toggleWishList(e: WishItem) {
    console.log('toggle clicked!', e);
    e.isComplete = !e.isComplete;
    console.log('post toggle', e);
  }
  title = 'wishlist-app';

  wishlist: WishItem[] = [
    new WishItem('Learn Typescript', true, new Date()),
    new WishItem('Learn Node', false, new Date()),
    new WishItem('Learn Angular', false, new Date()),
  ];
}
