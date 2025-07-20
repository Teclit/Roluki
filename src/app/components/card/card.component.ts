import {Component, Inject, Input, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {SkillImage} from '../../../../data';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() skills: SkillImage[] = [];

  visibleImages: SkillImage[] = [];
  private currentIndex = 0;
  private itemsPerPage = 3;
  private intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.updateVisibleImages();
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
        this.nextImages();
      }, 5000);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  previousImages(): void {
    this.currentIndex = Math.max(0, this.currentIndex - this.itemsPerPage);
    this.updateVisibleImages();
  }

  nextImages(): void {
    const maxIndex = this.skills.length - this.itemsPerPage;
    this.currentIndex = this.currentIndex >= maxIndex ? 0 : this.currentIndex + this.itemsPerPage;
    this.updateVisibleImages();
  }

  private updateVisibleImages(): void {
    this.visibleImages = this.skills.slice(
      this.currentIndex,
      this.currentIndex + this.itemsPerPage
    );
  }
}
