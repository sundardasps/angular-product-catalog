import { Component, inject } from '@angular/core';
import { MatIconButton, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatBadge } from '@angular/material/badge';
import { EcommerceStore } from '../../ecommerce.store';

@Component({
  selector: 'app-header-actions',
  imports: [MatIconButton, MatIcon, MatButton, RouterLink, MatBadge],
  template: `
    <div class="flex items-center gap-2">
      <button matIconButton routerLink="/my-wishlist" [matBadge]="store.wishlistCount()">
        <mat-icon>favorite</mat-icon>
      </button>
      <button matIconButton routerLink="/cart" [matBadge]="store.cartCount()">
        <mat-icon>shopping_cart</mat-icon>
      </button>
      <button matButton>
        <span>Sign In</span>
      </button>
      <button matButton="filled">
        <span>Sign Up</span>
      </button>
    </div>
  `,
  styles: ``,
})
export class HeaderActions {
  store = inject(EcommerceStore);
}
