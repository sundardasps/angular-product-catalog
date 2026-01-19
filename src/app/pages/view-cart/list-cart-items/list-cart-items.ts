import { Component, inject } from '@angular/core';
import { ViewPanel } from '../../../directives/view-panel';
import { ShowCartItems } from '../../show-cart-items/show-cart-items';
import { EcommerceStore } from '../../../ecommerce.store';

@Component({
  selector: 'app-list-cart-items',
  imports: [ViewPanel, ShowCartItems],
  template: ` <div appViewPanel>
    <h2 class="text-2xl font-bold mb-4">Cart Items ({{ store.cartCount() }})</h2>
    <div class="flex flex-col gap-6">
      @for (item of store.cartItems(); track item.product.id){
      <app-show-cart-items [item]="item" />
      }
    </div>
  </div>`,
  styles: ``,
})
export class ListCartItems {
  store = inject(EcommerceStore);
}
