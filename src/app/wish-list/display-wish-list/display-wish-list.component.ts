import { Component, Input, SimpleChanges } from '@angular/core';
import { default as WishItem } from '../model/wishItem';

@Component({
  selector: 'app-display-wish-list',
  templateUrl: './display-wish-list.component.html',
  styleUrl: './display-wish-list.component.css',
})
export class DisplayWishListComponent {
  selectedWishListItem: String = '0';

  @Input()
  wishItemFromParent!: WishItem;

  isModalOpen = false;

  wishItemList: WishItem[] = [
    new WishItem(1, 'Learning TS', false, new Date(), new Date()),
    new WishItem(2, 'Learning Node', false, new Date(), new Date()),
    new WishItem(3, 'Learning Angular', false, new Date(), new Date()),
  ];
  currentWishItem: any;

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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['wishItemFromParent'] && this.wishItemFromParent) {
      this.wishItemFromParent.wishId = this.wishItemList.length + 1;
      this.wishItemList.push(this.wishItemFromParent);
    }
  }

  editWishItem(editWishItem: WishItem) {
    console.log('edit wishItem', editWishItem);
    this.currentWishItem = { ...editWishItem };
    console.log(this.currentWishItem);
    this.isModalOpen = true;
  }
  deleteWishItem(deleteWishItem: WishItem) {
    console.log('delete wishItem', deleteWishItem);
    const delIndex = this.wishItemList.indexOf(deleteWishItem);
    this.wishItemList.splice(delIndex, 1);
  }

  onItemUpdated(updatedItem: WishItem) {
    console.log('onItemUpdated', updatedItem);

    const foundIndex = this.wishItemList.findIndex(
      (item) => item.wishId === updatedItem.wishId,
    );
    console.log('foundIndex', foundIndex);

    if (foundIndex !== -1) {
      const updateDate = new Date(updatedItem.completeDate);
      if (
        updateDate &&
        updateDate instanceof Date &&
        !isNaN(updateDate.getTime()) &&
        updateDate.getTime() <= new Date().getTime()
      ) {
        console.log('checked');
        updatedItem.isCompleted = true;
      } else {
        updatedItem.completeDate = new Date();
      }
      console.log('updatedItem', updatedItem);
      this.wishItemList[foundIndex] = updatedItem;
    }
    this.isModalOpen = false;
    this.displayWishListItem();
  }

  closeModal() {
    console.log('closeModal');
    this.isModalOpen = false;
  }
}
