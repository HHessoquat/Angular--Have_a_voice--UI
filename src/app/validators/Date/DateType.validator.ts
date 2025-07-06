import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';


export function isDateTimeValidator(): ValidatorFn {
  return (ctrl: AbstractControl): ValidationErrors | null => {
    if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(ctrl.value)) {
      return {typeDate: false};
    }
    return null;
  }
}
