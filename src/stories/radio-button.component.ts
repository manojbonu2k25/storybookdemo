import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./radio-button.scss'],
  template: `<div class="radio-button" [ngClass]="{ checked: checked, disabled: disabled }" (click)="toggle()">
  <div class="outer">
    <div class="inner"></div>
  </div>
  <span class="text-base">{{ label }}</span>
</div>`,
})
export class RadioButtonComponent {
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;

  @Output() changed = new EventEmitter<boolean>();

  toggle() {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.changed.emit(this.checked);
    }
  }
}
