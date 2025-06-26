import { Component } from '@angular/core';
import {TranslocoPipe} from '@jsverse/transloco';

@Component({
  selector: 'app-theme-switcher',
  imports: [TranslocoPipe],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent {
  themes = ["light", "dark"];
  protected readonly onchange = onchange;

  onChange(event: Event): void {
    for (const theme of this.themes) {
      document.body.classList.remove(theme);
    }
    const newTheme:string = (event.target as HTMLInputElement).value
    document.body.classList.add(newTheme);
  }
}
