import {Component, HostListener, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NAV_ITEMS, NavItem} from '../../shared/navigation-data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [
    RouterLink
],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() title!: string;
  activeLink = 'home';
  menuOpen = false;

  navItems: NavItem[] = NAV_ITEMS;

  setActiveLink(link: string, event: Event): void {
    event.preventDefault();
    this.activeLink = link;

    if (window.innerWidth <= 730) {
      this.menuOpen = false;
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 730) {
      this.menuOpen = false;
    }
  }
}
