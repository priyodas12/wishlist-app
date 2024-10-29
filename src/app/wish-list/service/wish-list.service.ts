import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import WishItem from '../model/wishItem';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  private apiUrl = 'http://localhost:3000/api/wishItems';

  constructor(private http: HttpClient) {}

  getWishItems(): Observable<WishItem[]> {
    return this.http.get<WishItem[]>(this.apiUrl);
  }

  saveWishItem(data: WishItem): Observable<WishItem> {
    console.log('saveWishItem', data);
    return this.http.post<WishItem>(this.apiUrl, data);
  }

  deleteWishItem(data: WishItem): Observable<WishItem> {
    console.log('deleteWishItem', data);
    return this.http.delete<WishItem>(this.apiUrl + '/' + data.wishId);
  }

  fetchWishItemById(data: WishItem): Observable<WishItem> {
    console.log('deleteWishItem', data);
    return this.http.get<WishItem>(this.apiUrl + '/' + data.wishId);
  }

  updateWishItem(data: WishItem): Observable<WishItem> {
    console.log('updateWishItem', data);
    return this.http.put<WishItem>(this.apiUrl, data);
  }
}
