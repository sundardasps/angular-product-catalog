import { Component, input, output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-qty-selector',
  standalone: true,
  imports: [MatIcon, MatIconButton],
  template: `
    <div class="flex items-center gap-3">
      <div class="inline-flex items-center">
        <button
          matIconButton
          [disabled]="quantity() === 1"
          (click)="qtyUpdated.emit(quantity() - 1)"
        >
          <mat-icon>remove</mat-icon>
        </button>

        <div class="px-3 font-medium">
          {{ quantity() }}
        </div>

        <button matIconButton (click)="qtyUpdated.emit(quantity() + 1)" >
          <mat-icon>add</mat-icon>
        </button>
      </div>
    </div>
  `,
})
export class QtySelector {
  quantity = input<number>(1);
  qtyUpdated = output<number>();
}
