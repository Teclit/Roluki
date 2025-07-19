import {Component, Input} from '@angular/core';
import {SOCIAL_LINKS, STARTING_YEAR} from '../../../../data';
import {RouterLink} from '@angular/router';
import {getCurrentYear, NAV_ITEMS, NavItem} from '../../shared/navigation-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [
    RouterLink
  ],
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() title!: string;

  startingYear = STARTING_YEAR;
  year = getCurrentYear();
  linkedInUrl = SOCIAL_LINKS.youtube_MesobHixanat;
  githubUrl = SOCIAL_LINKS.github;

  activeLink = 'accueil';

  navItems: NavItem[] = NAV_ITEMS;

  setActiveLink(link: string, event: Event): void {
    event.preventDefault();
    this.activeLink = link;
  }
}
