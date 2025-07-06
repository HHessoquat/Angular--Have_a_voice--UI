import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function isFuturValidator() : ValidatorFn {
  return (ctrl: AbstractControl): ValidationErrors | null => {
    const now = new Date();
    const inputDate = new Date(ctrl.value)
    if (isNaN(inputDate.getTime())) {
      return null;
    }
    if (inputDate <= now) {
      return {isFuture: false}
    }
    return null;
  }
}
