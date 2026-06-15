import { Component, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class Topbar {
  private readonly themeService =
    inject(ThemeService);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
