import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../models/products';
import { EcommerceStore } from '../../ecommerce.store';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-toggle-wishlist-button',
  imports: [MatIcon, MatIconButton],
  template: `
    <button
      class="w-10 h-10 rounded-full !bg-white shadow-md flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md"
      [class]="isInWishlist() ? '!text-red-500' : '!text-gray-500'"
      matIconButton
      (click)="toggleWishlist(product())"
    >
      <mat-icon>{{ isInWishlist() ? 'favorite' : 'favorite_border' }}</mat-icon>
    </button>
  `,
  styles: ``,
})
export class ToggleWishlistButton {
  product = input.required<Product>();

  store = inject(EcommerceStore);

  isInWishlist = computed(() =>
    this.store.wishlistItems().find((item) => item.id === this.product().id)
  );
  toggleWishlist = (product: Product) => {
    if (this.isInWishlist()) {
      this.store.removeFromWishlist(product);
    } else {
      this.store.addToWishlist(product);
    }
  };
}
