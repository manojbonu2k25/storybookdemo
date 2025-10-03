import { AfterViewInit, Component, ElementRef, Input, ViewChild, HostListener } from '@angular/core';
import { Rive, Layout, Fit, Alignment } from '@rive-app/canvas';

@Component({
  selector: 'app-rive-player',
  standalone: true,
  template: `<canvas #canvas class="rive-canvas"></canvas>`,
  styles: [`.rive-canvas { width: 100%; height: 100%; }`]
})
export class RivePlayerComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  @Input() src!: string;
  @Input() artboard?: string;
  @Input() animation = 'Timeline 1';  // Default animation name
  
  private riveInstance?: Rive;

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.riveInstance) {
      // Stop any current animations
      this.riveInstance.stop();
      // Play the animation from start
      this.riveInstance.play(this.animation);
    }
  }

  ngAfterViewInit() {
    this.riveInstance = new Rive({
      src: this.src,
      canvas: this.canvas.nativeElement,
      autoplay: true,
      artboard: this.artboard,
      animations: [this.animation],
      layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
      onLoad: () => {
        // Play initial animation
        if (this.riveInstance) {
          this.riveInstance.play(this.animation);
        }
      }
    });
  }
}