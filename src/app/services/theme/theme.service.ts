import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = new BehaviorSubject<string>('theme-light');

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.currentTheme.next(savedTheme);
    }
  }

  public changeTheme(isDarkEnable: boolean) {
    const newTheme = isDarkEnable ? 'theme-dark' : 'theme-light';
    this.currentTheme.next(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  public getCurrentTheme() {
    return this.currentTheme.asObservable();
  }
}
