import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chip',
  standalone: true, // ✅ Required for standalone components
  imports: [CommonModule], // ✅ Enables *ngIf and other common directives
  styleUrls: ['./chip.scss'],
  template: `
    <div class="chip text-small">
      <span>{{ label }}</span>
      <button *ngIf="removable" (click)="removeChip()">×</button>
    </div>
  `,
})
export class ChipComponent {
  @Input() label: string = '';
  @Input() removable: boolean = false;

  removeChip() {
    console.log(`${this.label} removed`);
  }
}