import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./checkbox.scss'],
  template: `<div class="checkbox" [ngClass]="{ checked: checked, disabled: disabled }" (click)="toggle()">
  <div class="box">
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none">
      <path d="M1.07031 3.3865L3.73603 5.6065L7.29031 1.1665"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"/>
    </svg>
  </div>
  <span class="text-menu">{{ label }}</span>
</div>`,
})
export class CheckboxComponent {
  @Input() label: string = 'Label';
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
