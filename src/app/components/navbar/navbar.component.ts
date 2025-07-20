import {Component, HostListener, OnInit, OnDestroy} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NAV_ITEMS, NavItem} from '../../shared/navigation-data';
import {NavigationService} from '../../shared/navigation.service';
import {Subscription} from 'rxjs';
import {COMPANY_NAME} from '../../../../data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [
    RouterLink
],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  title = COMPANY_NAME;
  activeLink = 'home';
  menuOpen = false;
  private subscription: Subscription = new Subscription();

  navItems: NavItem[] = NAV_ITEMS;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    // Subscribe to the active link changes
    this.subscription.add(
      this.navigationService.activeLink$.subscribe((link: string) => {
        this.activeLink = link;
      })
    );
  }

  ngOnDestroy(): void {
    // Clean up subscription when component is destroyed
    this.subscription.unsubscribe();
  }

  setActiveLink(link: string, event: Event): void {
    event.preventDefault();
    // Update the active link in the service
    this.navigationService.setActiveLink(link);

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
