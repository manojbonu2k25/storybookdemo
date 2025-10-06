import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../stories/header.component";
import { SidebarComponent } from "../stories/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,   // 👈 this is required!
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']  // 👈 use styleUrls (plural)
})
export class App {
  protected readonly title = signal('storybookdemo');
  protected readonly sidebarExpanded = signal(false);

  constructor() {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      this.sidebarExpanded.set(true);
    }
  }

  toggleSidebar(): void {
    this.sidebarExpanded.update((value) => !value);
  }

  setSidebarExpanded(value: boolean): void {
    this.sidebarExpanded.set(value);
  }
}
