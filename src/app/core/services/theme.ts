import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly STORAGE_KEY = 'theme';

  constructor() {
    const savedTheme =
      localStorage.getItem(this.STORAGE_KEY) ?? 'dark';

    this.setTheme(savedTheme);
  }

  setTheme(theme: string): void {
    document.documentElement.setAttribute(
      'data-theme',
      theme,
    );

    localStorage.setItem(this.STORAGE_KEY, theme);
  }

  toggleTheme(): void {
    const currentTheme =
      document.documentElement.getAttribute('data-theme');

    const newTheme =
      currentTheme === 'dark'
        ? 'light'
        : 'dark';

    this.setTheme(newTheme);
  }

  getCurrentTheme(): string {
    return (
      document.documentElement.getAttribute(
        'data-theme',
      ) ?? 'dark'
    );
  }
}