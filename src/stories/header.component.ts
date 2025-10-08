import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RivePlayerComponent } from './rive-player.component';   
import type { User } from './user';


@Component({
  selector: 'storybook-header',

  standalone: true,
  imports: [CommonModule, RivePlayerComponent],
  template: `
<header class="storybook-header">
  <!-- Left Section -->
  <div class="left-box">
    <button type="button" class="mobile-menu-btn" aria-label="Toggle navigation" (click)="onToggleSidebar.emit()">
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 43" fill="none">
        <path d="M0 8.5C0 4.08172 3.58172 0.5 8 0.5H34C38.4183 0.5 42 4.08172 42 8.5V34.5C42 38.9183 38.4183 42.5 34 42.5H8C3.58172 42.5 0 38.9183 0 34.5V8.5Z" fill="#F3F6FF"/>
        <path d="M26.25 12.75H10.5" stroke="#0554EF" stroke-width="2" stroke-linecap="round"/>
        <path d="M31.5 21.5H10.5" stroke="#0554EF" stroke-width="2" stroke-linecap="round"/>
        <path d="M22.75 30.25H10.5" stroke="#0554EF" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
    <div class="logo">
      <img src="assets/Western.svg" alt="Western Logo" />
    </div>
    <div class="divider"></div>
    <h1 class="report-title large-text">DASHBOARD</h1>
  </div>

  <!-- Right Section -->
  <div class="right-side">
    <div class="right-box">
      <div class="rivicons">
        <app-rive-player src="assets/bell.riv"></app-rive-player>
        <app-rive-player src="assets/vpn.riv"></app-rive-player>
        <app-rive-player src="assets/settings.riv"></app-rive-player>
      </div>

      <div class="user-info small-text">
        <div class="welcome">Welcome</div>
        <div class="username-row" [class.open]="isDropdownOpen">
          <span class="username">Manoj Kumar</span>
          <button
            type="button"
            class="profile-trigger"
            aria-label="User menu"
            [attr.aria-expanded]="isDropdownOpen"
            (click)="toggleDropdown($event)"
          >
            <svg class="desktop-arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
              <path d="M14.25 7.25L9 11.75L3.75 7.25" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <img class="mobile-avatar" src="assets/User Rounded.svg" alt="Profile" />
          </button>

          <div *ngIf="isDropdownOpen" class="dropdown-menu">
            <div class="dropdown-rivicons">
              <app-rive-player src="assets/bell.riv"></app-rive-player>
              <app-rive-player src="assets/vpn.riv"></app-rive-player>
              <app-rive-player src="assets/settings.riv"></app-rive-player>
            </div>
            <div class="dropdown-divider mobile-only"></div>
            <div class="dropdown-header">
              <div class="email medium-text">manoj.bonu@axelautomotive.com</div>
              <div class="role caption-text">Super Admin</div>
            </div>

            <div class="dropdown-divider"></div>

            <div class="dropdown-item body-text">Edit Profile</div>
            <div class="dropdown-item body-text">Edit Widgets</div>

            <div class="dropdown-footer">
              <a href="#" class="body-text">Sign Out</a>
              <a href="#" class="body-text">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="axel-logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="14" viewBox="0 0 200 15" fill="none">
      <path d="M0.0647882 13.9163L9.29461 1.58338C9.78112 0.933805 10.7725 0.552234 11.5849 0.552234C12.3972 0.552234 13.3932 0.933805 13.8751 1.58338L23.1003 13.9117C23.2656 14.1298 23.1049 14.4387 22.8296 14.4387H21.1176C20.5531 14.4387 20.0207 14.1752 19.6856 13.7255L11.7639 3.14146C11.6721 3.02336 11.4931 3.02336 11.4059 3.14146L3.48409 13.7255C3.14905 14.1752 2.61664 14.4387 2.05212 14.4387H0.335579C0.0601985 14.4387 -0.0958503 14.1298 0.0647882 13.9117V13.9163Z" fill="black"/>
      <path d="M50.8311 1.26995C50.8311 1.49253 50.7302 1.69695 50.5512 1.83322L43.3821 7.32965C43.2673 7.4205 43.2673 7.58858 43.3821 7.67943L50.5512 13.1486C50.7256 13.2849 50.8311 13.4938 50.8311 13.7164V13.73C50.8311 14.1252 50.5098 14.4478 50.1105 14.4478H49.1421C48.5501 14.4478 47.9764 14.2524 47.5082 13.8981L41.6701 9.44646C41.202 9.0876 40.6283 8.89682 40.0362 8.89682H38.2508C37.6588 8.89682 37.0851 9.09215 36.6169 9.44646L30.7789 13.8981C30.3107 14.257 29.737 14.4478 29.1449 14.4478H28.1765C27.7772 14.4478 27.4559 14.1252 27.4559 13.73V13.7164C27.4559 13.4938 27.5615 13.2849 27.7359 13.1486L34.905 7.67943C35.0197 7.58858 35.0197 7.4205 34.905 7.32965L27.7359 1.83322C27.5569 1.69695 27.4559 1.48799 27.4559 1.26541C27.4559 0.87021 27.7818 0.552234 28.1811 0.552234C28.5804 0.552234 28.9155 0.552234 29.1679 0.552234C29.76 0.552234 30.3291 0.747562 30.7972 1.10642L36.5986 5.55353C37.0667 5.91239 37.645 6.10772 38.2371 6.10772H40.0592C40.6512 6.10772 41.2295 5.91239 41.6977 5.55353L47.499 1.10642C47.9672 0.747562 48.5363 0.552234 49.1284 0.552234C49.3808 0.552234 49.7021 0.552234 50.1151 0.552234C50.5282 0.552234 50.8403 0.874752 50.8403 1.26995H50.8311Z" fill="#0554EF"/>
      <path d="M60.6806 3.33225C58.5372 3.33225 56.7977 5.05386 56.7977 7.17521V7.82479C56.7977 9.94614 58.5326 11.6678 60.6806 11.6678H76.2441C76.9831 11.6678 77.5843 12.2583 77.5843 12.9942V14.0071C77.5843 14.2524 77.387 14.4478 77.1391 14.4478H60.8963C57.2016 14.4478 54.2045 11.4815 54.2045 7.82479V7.17976C54.2045 3.52304 57.2016 0.556781 60.8963 0.556781H77.1391C77.387 0.556781 77.5843 0.752109 77.5843 0.997404V2.01038C77.5843 2.74173 76.9877 3.33225 76.2441 3.33225H60.6806ZM59.4 7.43414C59.4 6.70279 59.9967 6.10772 60.7402 6.10772H74.5414C74.7892 6.10772 74.9866 6.30305 74.9866 6.54835V7.33874C74.9866 8.07009 74.3899 8.66061 73.6464 8.66061H60.6439C59.9554 8.66061 59.4 8.11097 59.4 7.42959V7.43414Z" fill="black"/>
      <path d="M90.1646 11.6632H103.13C103.869 11.6632 104.471 12.2537 104.471 12.9896V14.0026C104.471 14.2479 104.269 14.4432 104.025 14.4432H90.3803C86.6856 14.4432 83.6886 11.477 83.6886 7.82024V0.992858C83.6886 0.747562 83.8859 0.552234 84.1338 0.552234H84.9461C85.6851 0.552234 86.2863 1.14276 86.2863 1.87865V7.82479C86.2863 9.94614 88.0258 11.6677 90.1692 11.6677L90.1646 11.6632Z" fill="black"/>
      <path d="M125.849 0.609016H135.846C139.54 0.609016 142.537 3.57527 142.537 7.23199V7.87703C142.537 11.5337 139.54 14.5 135.846 14.5H125.849C122.155 14.5 119.158 11.5337 119.158 7.87703V7.23199C119.158 3.57527 122.155 0.609016 125.849 0.609016ZM139.94 7.88157V7.23199C139.94 5.11064 138.205 3.38903 136.061 3.38903H125.638C123.495 3.38903 121.755 5.11064 121.755 7.23199V7.88157C121.755 10.0029 123.49 11.7245 125.638 11.7245H136.061C138.205 11.7245 139.94 10.0029 139.94 7.88157Z" fill="#231F20"/>
      <path d="M171.181 0.609016C171.429 0.609016 171.627 0.804343 171.627 1.04964V13.1736C171.627 13.9049 171.03 14.5 170.291 14.5H169.015C168.561 14.4909 168.12 14.3546 167.744 14.1093C164.806 12.1924 154.319 5.35139 151.189 3.30726C151.042 3.21187 150.845 3.31635 150.845 3.48896V13.1736C150.845 13.9049 150.248 14.5 149.509 14.5H148.697C148.449 14.5 148.251 14.3047 148.251 14.0594V1.93543C148.251 1.20408 148.848 0.609016 149.587 0.609016H150.79C151.262 0.609016 151.726 0.745291 152.121 1.00421L168.685 11.8108C168.832 11.9062 169.029 11.8018 169.029 11.6246V1.93543C169.029 1.20408 169.63 0.609016 170.364 0.609016H171.181Z" fill="#231F20"/>
      <path d="M183.096 3.27547C180.953 3.27547 179.213 4.99708 179.213 7.11843V7.76801C179.213 9.88936 180.948 11.611 183.096 11.611H198.66C199.399 11.611 200 12.2015 200 12.9374V13.9504C200 14.1957 199.803 14.391 199.555 14.391H183.312C179.617 14.391 176.62 11.4247 176.62 7.76801V7.12297C176.62 3.46626 179.617 0.5 183.312 0.5H199.555C199.803 0.5 200 0.695328 200 0.940623V1.9536C200 2.68495 199.403 3.27547 198.66 3.27547H183.096ZM181.816 7.3819C181.816 6.65055 182.412 6.05549 183.156 6.05549H196.957C197.205 6.05549 197.402 6.25081 197.402 6.49611V7.2865C197.402 8.01785 196.806 8.60837 196.062 8.60837H183.06C182.371 8.60837 181.816 8.05873 181.816 7.37735V7.3819Z" fill="#231F20"/>
    </svg>
    </div>
  </div>
</header>
`,
  styleUrls: ['./header.css'],
})
export class HeaderComponent {
  @Input()
  user: User | null = null;

  @Output()
  onToggleSidebar = new EventEmitter<void>();

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onEditProfile = new EventEmitter<void>();

  @Output()
  onEditWidget = new EventEmitter<void>();

  @Output()
  onSignOut = new EventEmitter<void>();

  @Output()
  onPrivacyPolicy = new EventEmitter<void>();

  isDropdownOpen = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.username-row')) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation(); // Prevent immediate closing
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
