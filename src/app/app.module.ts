import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/custom-directives/app-highlight.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayWishListComponent } from './wish-list/display-wish-list/display-wish-list.component';
import { AddWishListComponent } from './wish-list/add-wish-list/add-wish-list.component';
import { WishListComponent } from './wish-list/wish-list.component';

@NgModule({
  declarations: [AppComponent, HighlightDirective, DisplayWishListComponent, AddWishListComponent, WishListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
