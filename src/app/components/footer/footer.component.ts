import {Component, OnInit, OnDestroy} from '@angular/core';
import {SOCIAL_LINKS, STARTING_YEAR, COMPANY_NAME} from '../../../../data';
import {RouterLink} from '@angular/router';
import {getCurrentYear, NAV_ITEMS, NavItem} from '../../shared/navigation-data';
import {NavigationService} from '../../shared/navigation.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [
    RouterLink
  ],
  styleUrl: './footer.component.css',
  standalone: true
})
export class FooterComponent implements OnInit, OnDestroy {
  title = COMPANY_NAME;

  startingYear = STARTING_YEAR;
  year = getCurrentYear();
  linkedInUrl = SOCIAL_LINKS.youtube_MesobHixanat;
  githubUrl = SOCIAL_LINKS.github;

  activeLink = 'home';
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
  }
}
