import { Component, computed, inject, input, output } from '@angular/core';
import { Product } from '../../models/products';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../ecommerce.store';

@Component({
  selector: 'app-product-card',
  imports: [MatButton, MatIcon],
  template: `
    <div
      class="relative bg-white cursor-pointer rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
    >
      <img
        [src]="product().imageUrl"
        alt="product image"
         referrerpolicy="no-referrer"
        class="w-full h-[300px] object-cover rounded-t-lg"
      />

      <ng-content />

      <div class="p-5 flex flex-col glex-1">
        <h3 class="text-lg font-bold text-gray-900">{{ product().name }}</h3>
        <p class="text-sm font-semibold text-gray-600">{{ product().description }}</p>
        <p class="text-sm text-gray-600">{{ product().price }}</p>
        <div class="text-sm font-medium mb-4">
          {{ product().inStock ? 'In Stock' : 'Out of Stock' }}
        </div>

        <div class="flex items-center justify-between gap-2 ">
          <span class="text-xl font-bold text-gray-600">\${{ product().price }}</span>
          <button
            matButton="filled"
            class="flex items-center gap-2"
            (click)="store.addToCart(product())"
          >
            <mat-icon>add_shopping_cart</mat-icon>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductCard {
  product = input.required<Product>();
  addToCartClicked = output<Product>();
  store = inject(EcommerceStore);
}
