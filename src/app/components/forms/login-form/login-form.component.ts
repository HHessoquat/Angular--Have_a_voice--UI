import {Component, OnInit} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {FormService} from '../../../services/form.service';
import {TranslocoPipe} from '@jsverse/transloco';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login-form',
  imports: [TranslocoPipe, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  apiResponseCode?: string;

  constructor(private formService: FormService, private authService: AuthService) {
  }
  ngOnInit(): void {
    this.loginForm = this.formService.initLoginForm();
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value);
    }
  }
}
