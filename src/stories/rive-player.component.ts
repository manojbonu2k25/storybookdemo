import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-rive-player',
  standalone: true,
  template: `<canvas #canvas class="rive-canvas"></canvas>`,
  styles: [`.rive-canvas { width: 100%; height: 100%; }`]
})
export class RivePlayerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  @Input() src!: string;
  @Input() artboard?: string;
  @Input() animation = 'Timeline 1';  // Default animation name
  
  private riveInstance: any;
  private riveModule: typeof import('@rive-app/canvas') | null = null;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.riveInstance) {
      // Stop any current animations
      this.riveInstance.stop();
      // Play the animation from start
      this.riveInstance.play(this.animation);
    }
  }

  async ngAfterViewInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (!this.src) {
      return;
    }

    if (!this.riveModule) {
      this.riveModule = await import('@rive-app/canvas');
    }

    const { Rive, Layout, Fit, Alignment } = this.riveModule;

    this.riveInstance = new Rive({
      src: this.src,
      canvas: this.canvas.nativeElement,
      autoplay: true,
      artboard: this.artboard,
      animations: [this.animation],
      layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
      onLoad: () => {
        if (this.riveInstance) {
          this.riveInstance.play(this.animation);
        }
      },
    });
  }

  ngOnDestroy(): void {
    if (this.riveInstance) {
      this.riveInstance.stop();
      this.riveInstance = null;
    }
  }
}
