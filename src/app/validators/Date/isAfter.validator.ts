import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function isAfterValidator(start: string, end: string): ValidatorFn {
  return (ctrl: AbstractControl): ValidationErrors | null => {
    if( !ctrl.get(start) || !ctrl.get(end) ) {
      return {
        isAfterValidator: "invalid Controls Names"
      }
    }
    const dateStart = new Date(ctrl.get(start)!.value);
    const dateEnd = new Date(ctrl.get(end)!.value);

    return dateEnd <= dateStart ? {isAfter: false}: null;
  }
}
