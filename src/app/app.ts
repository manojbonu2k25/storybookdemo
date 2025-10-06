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
}
