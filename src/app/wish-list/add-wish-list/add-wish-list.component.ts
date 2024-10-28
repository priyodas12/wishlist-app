import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import WishItem from '../model/wishItem';

@Component({
  selector: 'app-add-wish-list',
  templateUrl: './add-wish-list.component.html',
  styleUrl: './add-wish-list.component.css',
})
export class AddWishListComponent {
  @Output()
  wishItemDataSent: EventEmitter<WishItem> = new EventEmitter<WishItem>();

  isChecked: boolean = false;

  onSubmitWishItem(wishFormData: NgForm) {
    console.log('onSubmitWishItem');

    const wishItemName = wishFormData.value.wishItemName;
    const wishItemStartDate = wishFormData.value.wishItemStartDate;
    const wishItemEndDate = wishFormData.value.wishItemEndDate;
    const isCompleted = this.isChecked;

    const newWishItem = new WishItem(
      0,
      wishItemName,
      isCompleted,
      wishItemStartDate,
      wishItemEndDate,
    );

    this.wishItemDataSent.emit(newWishItem);
  }
}
