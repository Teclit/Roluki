import { Component, Input, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';


interface NavItem {
  id: string;
  fragment: string;
  label: string;
}

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

  navItems: NavItem[] = [
    { id: 'home', fragment: 'home', label: 'Home' },
    { id: 'alphabet', fragment: 'alphabet', label: 'Alphabet' },
    { id: 'practice', fragment: 'practice', label: 'Practice' },
    { id: 'resource', fragment: 'resource', label: 'Resources' },
    { id: 'about', fragment: 'about', label: 'About' },
    { id: 'contact', fragment: 'contact', label: 'Contact' }
  ];

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
