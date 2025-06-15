import { Component, inject } from '@angular/core';
import { ThemeService } from '@layout/service/theme.service';
import { SunIconComponent } from '@shared/icons/sun-icon.component';
import { MoonIconComponent } from '@shared/icons/moon-icon.component';

@Component({
  selector: 'app-theme-toggle',
  imports: [SunIconComponent, MoonIconComponent],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent {
  protected themeService = inject(ThemeService);

  protected theme = this.themeService.currentTheme;

  toggle() {
    this.themeService.toggleTheme();
  }
}
