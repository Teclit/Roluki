import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  // Initialize with 'home' as the default active link
  private activeLinkSubject = new BehaviorSubject<string>('home');

  // Observable that components can subscribe to
  public activeLink$: Observable<string> = this.activeLinkSubject.asObservable();

  constructor() { }

  // Method to get the current active link
  getActiveLink(): string {
    return this.activeLinkSubject.value;
  }

  // Method to set the active link
  setActiveLink(link: string): void {
    this.activeLinkSubject.next(link);
  }
}
