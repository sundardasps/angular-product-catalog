import { Component, computed, inject, input, signal } from '@angular/core';
import { Product } from '../../models/products';
import { ProductCard } from '../../components/product-card/product-card';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatNavList, MatListItem } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { EcommerceStore } from '../../ecommerce.store';
import { ToggleWishlistButton } from '../../components/toggle-wishlist-button/toggle-wishlist-button';
@Component({
  selector: 'app-products-grid',
  imports: [
    ProductCard,
    MatSidenav,
    MatSidenavContent,
    MatSidenavContainer,
    MatNavList,
    MatListItem,
    RouterLink,
    TitleCasePipe,
    ToggleWishlistButton,
  ],
  template: `
    <mat-sidenav-container>
      <mat-sidenav mode="side" opened="true" class="p-6">
        <h1 class="text-2xl font-bold text-gray-900">Categories</h1>
        <mat-nav-list>
          @for (cat of categories(); track cat) {
          <mat-list-item
            class="my-2"
            button="true"
            [activated]="cat === category()"
            routerLink="/products/{{ cat }}"
          >
            <span matListItemTitle [class]="cat === category() ? 'text-white' : null">{{
              cat | titlecase
            }}</span>
          </mat-list-item>
          }
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content class="bg-gray-100 p-6 ">
        <h1 class="text-2xl font-bold text-gray-900">{{ category() | titlecase }}</h1>
        <p class="text-base mb-6 text-gray-600">
          {{ store.filteredProducts().length }} products found
        </p>
        <div class="responsive-grid">
          @for (product of store.filteredProducts(); track product.id) {
          <app-product-card [product]="product">
            <app-toggle-wishlist-button  [product]="product" class="!absolute z-10 top-3 right-3" />
          </app-product-card>

          }
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: ``,
})
export default class ProductsGrid {
  category = input<string>('all');
  store = inject(EcommerceStore);
  categories = signal<string[]>(['all', 'Electronics', 'Accessories', 'Office', 'Home', 'Fashion']);

  constructor() {
    this.store.setCategory(this.category);
  }
}
