import { Component } from '@angular/core';
import {TranslocoPipe, TranslocoService} from '@jsverse/transloco';

@Component({
  selector: 'app-lang-switcher',
  imports: [TranslocoPipe],
  templateUrl: './lang-switcher.component.html',
  styleUrl: './lang-switcher.component.scss'
})
export class LangSwitcherComponent {
  currentLang: String;
  availableLangs: string[];

  constructor(private translocoService: TranslocoService) {
    this.currentLang = this.translocoService.getActiveLang()
    const languages = this.translocoService.getAvailableLangs();

    const availableLangs = this.translocoService.getAvailableLangs();
    // Check if languages are provided as strings or objects, and extract accordingly
    if (Array.isArray(availableLangs) && typeof languages[0] === 'string') {
      this.availableLangs = languages as string[];
    } else {
      this.availableLangs = (languages as { id: string; label: string }[]).map(lang => lang.id);
    }
  }

  onChange(event: Event) {
    const langCode = (event.target as HTMLSelectElement).value;
    this.translocoService.setActiveLang(langCode);
    this.currentLang = langCode;
  }
}
