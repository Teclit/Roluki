import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, interval } from 'rxjs';
import { tigrinyaAlphabet, TigrinyaCharacter } from '../../../../geez';

enum ViewMode {
  Carousel = 'carousel',
  Grid = 'grid',
}

@Component({
  selector: 'app-tigrinya-alphabet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tigrinya-alphabet.component.html',
  styleUrl: './tigrinya-alphabet.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TigrinyaAlphabetComponent {
  readonly alphabetData: TigrinyaCharacter[] = tigrinyaAlphabet;

  readonly currentIndex = signal(0);
  readonly currentView = signal<ViewMode>(ViewMode.Carousel);

  readonly ViewMode = ViewMode;
  readonly isCarouselView = computed(() => this.currentView() === ViewMode.Carousel);
  readonly isGridView = computed(() => this.currentView() === ViewMode.Grid);
  readonly currentCharacter = computed(() => this.alphabetData[this.currentIndex()]);

  constructor() {
    interval(5000)
      .pipe(
        takeUntilDestroyed(),
        filter(() => this.isCarouselView())
      )
      .subscribe(() => {
        this.nextCharacter();
      });
  }

  previousCharacter(): void {
    this.currentIndex.update(i => (i - 1 + this.alphabetData.length) % this.alphabetData.length);
  }

  nextCharacter(): void {
    this.currentIndex.update(i => (i + 1) % this.alphabetData.length);
  }

  toggleView(): void {
    this.currentView.update(view => view === ViewMode.Carousel ? ViewMode.Grid : ViewMode.Carousel);
  }
}
