import { Injectable } from '@angular/core';
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from '@angular/forms';
import {ApiService} from './api.service';
import Credentials from '../models/Credentials';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(
    private formBuilder: NonNullableFormBuilder,
    private apiService: ApiService,
  ) {}

  initEmptyFormGroup(): FormGroup {
    return this.formBuilder.group({})
  }

  initLoginForm(): FormGroup {
    const loginForm: FormGroup = this.initEmptyFormGroup();
    loginForm.addControl(
      'username',
      this.formBuilder.control('', Validators.required)
    );
    loginForm.addControl(
      'password',
      this.formBuilder.control('', Validators.required)
    )
    return loginForm;
  }



}
