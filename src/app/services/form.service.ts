import {Injectable} from '@angular/core';
import {FormArray, FormGroup, NonNullableFormBuilder, Validators} from '@angular/forms';
import {ApiService} from './api.service';
import {isDateTimeValidator} from '../validators/Date/DateType.validator';
import {nowOrFutureValidator} from '../validators/Date/NowOrFuture.validator';
import {isAfterValidator} from '../validators/Date/isAfter.validator';
import {isFuturValidator} from '../validators/Date/IsFutur.validator';
import {atLeastValidators} from '../validators/Array/AtLeastValidators';

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
  initElectionForm(): FormGroup {
    return this.formBuilder.group({
        name: ['', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(200)
        ]],
        dateStart: ['', [Validators.required, isDateTimeValidator(), nowOrFutureValidator()]],
        dateEnd: ['', [Validators.required, isDateTimeValidator(), isFuturValidator()]],
        choices: this.formBuilder.array([], [atLeastValidators(2)])
      },
      {
        validators: [isAfterValidator('dateStart', 'dateEnd')]
      }
    );
  }
  initChoiceForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      picture: [''],
      description: ['', Validators.maxLength(250)],
    });
  }
  addChoice(electionForm: FormGroup): void {
    if (!electionForm.get('choices')) {
      throw new Error('wrong form');
    }
    let choices = electionForm.get('choices') as FormArray;

    (electionForm.get('choices') as FormArray).push(this.initChoiceForm());

  }
}
