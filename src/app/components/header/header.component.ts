import { Component } from '@angular/core';
import {LangSwitcherComponent} from '../lang-switcher/lang-switcher.component';
import {ModalComponent} from '../modal/modal.component';
import {LoginFormComponent} from '../login-form/login-form.component';

@Component({
  selector: 'app-header',
  imports: [LangSwitcherComponent, ModalComponent, LoginFormComponent],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
  export class HeaderComponent {
    isModalOpen = false;

    showModal(isShown: boolean = !this.isModalOpen) {
      this.isModalOpen = isShown
    }
  }
