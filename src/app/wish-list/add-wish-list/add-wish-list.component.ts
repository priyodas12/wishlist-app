import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import WishItem from '../model/wishItem';
import { WishListService } from '../service/wish-list.service';

@Component({
  selector: 'app-add-wish-list',
  templateUrl: './add-wish-list.component.html',
  styleUrl: './add-wish-list.component.css',
})
export class AddWishListComponent {
  newSavedWishItem!: WishItem;
  private wishListService: WishListService;

  constructor(wishListService: WishListService) {
    this.wishListService = wishListService;
  }

  @Output()
  wishItemDataSent: EventEmitter<WishItem> = new EventEmitter<WishItem>();

  isChecked: boolean = false;

  onSubmitWishItem(wishFormData: NgForm) {
    console.log('onSubmitWishItem:');

    const wishItemName = wishFormData.value.wishItemName;
    const wishItemStartDate = wishFormData.value.wishItemStartDate;
    const wishItemEndDate = wishFormData.value.wishItemEndDate;
    const isCompleted = this.isChecked;

    const newWishItem = new WishItem(
      0,
      new Date().getTime(),
      wishItemName,
      isCompleted,
      wishItemStartDate,
      wishItemEndDate,
    );

    this.wishListService.saveWishItem(newWishItem).subscribe({
      next: (value: WishItem) => {
        this.newSavedWishItem = value;
        console.log('Next:saveWishItem: ', value);
      },
      error: (error) => {
        console.log('Error:saveWishItem: ', error);
      },
      complete: () => {
        console.log('Completed:saveWishItem', this.newSavedWishItem);
        this.wishItemDataSent.emit(this.newSavedWishItem);
      },
    });
  }
}
