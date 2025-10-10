import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./button.scss'],
  template: `<button class="button" [ngClass]="type">
  <ng-container [ngSwitch]="type">
    <ng-container *ngSwitchCase="'add'">
      <span>{{ label }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
        <circle cx="10.4993" cy="10.4163" r="8.33333" stroke="white" stroke-width="1.5" />
        <path d="M13 10.4165L10.5 10.4165M10.5 10.4165L8 10.4165M10.5 10.4165L10.5 7.9165M10.5 10.4165L10.5 12.9165"
          stroke="white" stroke-width="1.5" stroke-linecap="round" />
      </svg>
    </ng-container>

    <ng-container *ngSwitchDefault>
      <span>{{ label }}</span>
    </ng-container>
  </ng-container>
</button>`,
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() type: 'cancel' | 'update' | 'add' = 'update';
}