import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tigrinyaAlphabet, TigrinyaCharacter } from '../../../../geez';

@Component({
  selector: 'app-tigrinya-alphabet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tigrinya-alphabet.component.html',
  styleUrl: './tigrinya-alphabet.component.css'
})
export class TigrinyaAlphabetComponent implements OnInit, OnDestroy {
  alphabetData: TigrinyaCharacter[] = [];
  visibleCharacters: TigrinyaCharacter[] = [];
  currentIndex = 0;
  private intervalId: any;
  showCarousel = true;
  showGrid = false;

  constructor() {}

  ngOnInit(): void {
    this.alphabetData = tigrinyaAlphabet;
    this.updateVisibleCharacters();
    this.startAutoRotation();

    // Ensure initial state is correct
    this.showCarousel = true;
    this.showGrid = false;
  }

  ngOnDestroy(): void {
    this.stopAutoRotation();
  }

  previousCharacter(): void {
    this.currentIndex = (this.currentIndex - 1 + this.alphabetData.length) % this.alphabetData.length;
    this.updateVisibleCharacters();
  }

  nextCharacter(): void {
    this.currentIndex = (this.currentIndex + 1) % this.alphabetData.length;
    this.updateVisibleCharacters();
  }

  private updateVisibleCharacters(): void {
    this.visibleCharacters = [this.alphabetData[this.currentIndex]];
  }

  private startAutoRotation(): void {
    this.intervalId = setInterval(() => {
      this.nextCharacter();
    }, 5000);
  }

  private stopAutoRotation(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  toggleView(): void {
    this.showCarousel = !this.showCarousel;
    this.showGrid = !this.showGrid;

    if (this.showCarousel) {
      this.startAutoRotation();
    } else {
      this.stopAutoRotation();
    }
  }
}
