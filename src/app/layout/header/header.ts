import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderActions } from '../header-actions/header-actions';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, HeaderActions],
  template: `
    <mat-toolbar class="w-full elevated py-2 z-50">
      <div class="max-w-[1200px] mx-auto w-full flex justify-between items-center">
        <span class="text-2xl">Modern Angular Ecommerce</span>
        <app-header-actions />
      </div>
    </mat-toolbar>
  `,
  styles: ``,
})
export class Header {}
