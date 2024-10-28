import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWishListComponent } from './edit-wish-list.component';

describe('EditWishListComponent', () => {
  let component: EditWishListComponent;
  let fixture: ComponentFixture<EditWishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditWishListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
