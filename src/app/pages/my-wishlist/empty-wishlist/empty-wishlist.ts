import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empty-wishlist',
  standalone: true,
  imports: [RouterLink, MatIcon],
  template: `
    <div class="flex flex-col items-center justify-center py-60 text-center">
      <button>
        <mat-icon>favorite_border</mat-icon>
      </button>

      <h2 class="text-2xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h2>

      <p class="text-gray-600 max-w-md mb-6">
        You haven’t added any products to your wishlist yet. Start exploring and save your favorite
        items here.
      </p>

      <a
        routerLink="/products/all"
        class="inline-flex items-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition"
      >
        Continue shopping
      </a>
    </div>
  `,
})
export class EmptyWishlist {}
