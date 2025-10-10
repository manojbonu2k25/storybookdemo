import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./switch.scss'],
  template: `<div
  class="switch"
  [ngClass]="{ on: checked, off: !checked, disabled: disabled }"
  (click)="toggle()"
>
  <div class="circle"></div>
</div>`,
})
export class SwitchComponent {
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