import { Component, Input, SimpleChanges } from '@angular/core';
import { default as WishItem } from '../model/wishItem';
import { WishListService } from '../service/wish-list.service';

@Component({
  selector: 'app-display-wish-list',
  templateUrl: './display-wish-list.component.html',
  styleUrl: './display-wish-list.component.css',
})
export class DisplayWishListComponent {
  private wishListService: WishListService;

  private fetchedWishItemById!: WishItem;

  constructor(wishListService: WishListService) {
    this.wishListService = wishListService;
  }
  selectedWishListItem: String = '0';

  @Input()
  wishItemFromParent!: WishItem;

  isModalOpen = false;

  wishItemList: WishItem[] = [];
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
      console.log(this.wishItemFromParent);
      this.wishItemList.push(this.wishItemFromParent);
    }
  }

  ngOnInit() {
    this.loadWishListData();
  }

  editWishItem(editWishItem: WishItem) {
    console.log('editWishItem', editWishItem);
    this.currentWishItem = { ...editWishItem };
    console.log(this.currentWishItem);
    this.isModalOpen = true;
  }

  deleteWishItem(deleteWishItem: WishItem) {
    console.log('delete wishItem', deleteWishItem);
    this.wishListService.deleteWishItem(deleteWishItem).subscribe({
      next: (value) => {
        console.log('Next:deleteWishItem: ', value);
      },
      error: (error) => {
        console.log('Error: deleteWishItem: ', error);
      },
      complete: () => {
        console.log('Completed: deleteWishItem: ');
        this.loadWishListData();
      },
    });
  }

  onItemUpdated(updatedItem: WishItem) {
    console.log('onItemUpdated', updatedItem);

    const updateDate = new Date(updatedItem.completeDate);
    if (
      updateDate &&
      updateDate instanceof Date &&
      !isNaN(updateDate.getTime()) &&
      updateDate.getTime() <= new Date().getTime()
    ) {
      updatedItem.isCompleted = true;
    } else {
      updatedItem.completeDate = new Date();
    }

    this.wishListService.updateWishItem(updatedItem).subscribe({
      next: (value: WishItem) => {
        console.log('Next:updateWishItem: ', value);
      },
      error: (error) => {
        console.log('Error:updateWishItem: ', error);
      },
      complete: () => {
        console.log('Completed:updateWishItem: ', updatedItem);
        this.loadWishListData();
      },
    });
    this.isModalOpen = false;
    this.displayWishListItem();
  }

  closeModal() {
    console.log('closeModal: ');
    this.isModalOpen = false;
  }

  loadWishListData() {
    this.wishListService.getWishItems().subscribe({
      next: (items: WishItem[]) => {
        this.wishItemList = items;
        console.log('Next:loadWishListData: ', items);
      },
      error: (error) => {
        console.log('Error:loadWishListData: ', error);
      },
      complete: () => {
        console.log('Complete:loadWishListData:');
      },
    });
  }
}
