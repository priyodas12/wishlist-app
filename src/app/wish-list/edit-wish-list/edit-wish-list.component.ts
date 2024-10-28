import { Component, EventEmitter, Input, Output } from '@angular/core';
import WishItem from '../model/wishItem';

@Component({
  selector: 'app-edit-wish-list',
  templateUrl: './edit-wish-list.component.html',
  styleUrl: './edit-wish-list.component.css',
})
export class EditWishListComponent {
  @Input() wishItem!: WishItem;
  @Output() itemUpdated = new EventEmitter<WishItem>();
  @Output() close = new EventEmitter<void>();

  onSubmit() {
    console.log('onSubmit', this.wishItem);
    this.itemUpdated.emit(this.wishItem);
    this.close.emit();
  }

  closeModal() {
    this.close.emit();
  }
}
