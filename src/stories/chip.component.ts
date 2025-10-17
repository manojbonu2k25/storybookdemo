import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chip',
  styleUrls: ['./chip.scss'],
    template: `<div class="chip text-small" >
  <span>{{ label }}</span>
  <button *ngIf="removable" (click)="removeChip()">×</button>
</div>`,
})
export class ChipComponent {
  @Input() label: string = '';
  @Input() removable: boolean = false;

  removeChip() {
    console.log(`${this.label} removed`);
  }
}
