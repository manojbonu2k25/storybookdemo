import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Rive, Layout, Fit, Alignment } from '@rive-app/canvas';

@Component({
  selector: 'app-rive-player',
  standalone: true,
  template: `<canvas #canvas class="rive-canvas"></canvas>`,
  styles: [`.rive-canvas { width: 100%; height: 100%; }`]
})
export class RivePlayerComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  @Input() src!: string;       // Path to .riv file (e.g., "assets/animation.riv")
  @Input() artboard?: string;
  @Input() animation?: string;

  ngAfterViewInit() {
    new Rive({
      src: this.src,
      canvas: this.canvas.nativeElement,
      autoplay: true,
      artboard: this.artboard,
      animations: this.animation ? [this.animation] : undefined,
      layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
    });
  }
}