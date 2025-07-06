import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function nowOrFutureValidator(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

    const inputDate = new Date(control.value);
    const now = new Date();
    if (isNaN(inputDate.getDay())) return null;

    if (inputDate < now) {
      return {tooSoon: true};
    }
    return null;
  }
}
