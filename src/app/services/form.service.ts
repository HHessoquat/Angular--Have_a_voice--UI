import {Injectable} from '@angular/core';
import {FormArray, FormGroup, NonNullableFormBuilder, Validators} from '@angular/forms';
import {ApiService} from './api.service';
import {isDateTimeValidator} from '../validators/Date/DateType.validator';
import {nowOrFutureValidator} from '../validators/Date/NowOrFuture.validator';
import {isAfterValidator} from '../validators/Date/isAfter.validator';
import {isFuturValidator} from '../validators/Date/IsFutur.validator';
import {atLeastValidators} from '../validators/Array/AtLeastValidators';
import Election from '../models/Election';
import {Businesscode} from '../shared/constants/Businesscode';
import {map, Observable, of, take} from 'rxjs';
import ApiResponse from '../models/ApiResponse';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private apiService: ApiService,
    private authService: AuthService,
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
    const now = new Date();
    const tomorrow = new Date(now.toISOString());
    tomorrow.setHours(now.getHours() + 24)
    const form = this.formBuilder.group({
        name: ['', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(200)
        ]],
        dateStart: [now.toISOString().slice(0, 16), [Validators.required, isDateTimeValidator(), nowOrFutureValidator()]],
        dateEnd: [tomorrow.toISOString().slice(0, 16), [Validators.required, isDateTimeValidator(), isFuturValidator()]],
        choices: this.formBuilder.array([], [atLeastValidators(2)])
      },
      {
        validators: [isAfterValidator('dateStart', 'dateEnd')]
      }
    );
    for (let i = 0; i <= 1; i++) {
      this.addChoice(form)
    }
    return form;
  }
  initChoiceForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
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
  removeChoice(electionForm: FormGroup, index: number): void {
    (electionForm.get('choices') as FormArray).removeAt(index);
  }
  submitElection(form: FormGroup): Observable<string> {
    if(form.invalid) {
      return of(Businesscode.INVALID_ELECTION)
    }
    const user = {id: this.authService.getConnectedUserId()}
    form.addControl("organizer", this.formBuilder.control(user))

    return this.apiService.addElection(form.value).pipe(
      take(1),
      map((res:ApiResponse<Election>) => {
        console.log(res)
        return res.code
      })
    );

  }
}
