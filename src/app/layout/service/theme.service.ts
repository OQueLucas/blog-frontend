import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme = signal<'light' | 'dark'>('light');

  constructor() {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (stored === 'dark') {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }
  }

  get currentTheme() {
    return this.theme.asReadonly();
  }

  public toggleTheme() {
    const next = this.theme() === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  }

  private setTheme(theme: 'light' | 'dark') {
    this.theme.set(theme);
    localStorage.setItem('theme', theme);

    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
}
