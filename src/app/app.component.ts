import { Component } from '@angular/core';
import WishItem from '../shared/model/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'wishlist-app';

  wishlist: WishItem[] = [
    new WishItem('Learn Typescript', true, new Date()),
    new WishItem('Learn Node', true, new Date()),
    new WishItem('Learn Angular', true, new Date()),
  ];
}
