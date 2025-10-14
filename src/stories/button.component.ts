import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./button.scss'],
  template: `
    <button class="button" [ngClass]="[appearance, variant, size]">
      {{ label }}
    </button>
  `,
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() appearance: 'primary' | 'light' | 'dark' = 'primary';
  @Input() variant: 'solid' | 'bordered' | 'transparent' | 'solid-medium' | 'solid-light' | 'bordered-light' = 'solid';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
}
