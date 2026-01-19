import { Component, inject } from '@angular/core';
import { BackButton } from '../../components/back-button/back-button';
import { EcommerceStore } from '../../ecommerce.store';
import { ProductCard } from '../../components/product-card/product-card';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { EmptyWishlist } from './empty-wishlist/empty-wishlist';

@Component({
  selector: 'app-my-wishlist',
  imports: [
    BackButton,
    ProductCard,
    MatIcon,
    MatIconButton,
    MatButton,
    EmptyWishlist,
  ],
  template: `
    <div class="mx-auto max-w-[1200px] py-6 px-4">
      <app-back-button navigateTo="/products/all"> Continue shoping </app-back-button>

      @if (store.wishlistCount() > 0){
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-bold">My Wishlist</h1>
        <span class="text-gray-500 text-xl">{{ store.wishlistCount() }} items </span>
      </div>

      <div class="responsive-grid">
        @for (product of store.wishlistItems() ; track product.id){
        <app-product-card [product]="product">
          <button
            class="!absolute z-10 top-3 right-3 w-10 h-10 rounded-full !bg-white shadow-md flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md"
            matIconButton
            (click)="store.removeFromWishlist(product)"
          >
            <mat-icon>delete</mat-icon>
          </button>
        </app-product-card>
        }
      </div>

      <div class="mt-8 flex items-center justify-center">
        <button matButton="outlined" class="danger" (click)="store.clearWishlist()">
          Clear Wishlist
        </button>
      </div>

      }@else{

      <app-empty-wishlist />
      }
    </div>
  `,
  styles: ``,
})
export default class MyWishlist {
  store = inject(EcommerceStore);
}
