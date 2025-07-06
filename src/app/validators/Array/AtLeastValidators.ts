import {AbstractControl, FormArray, ValidationErrors, ValidatorFn} from '@angular/forms';

export function atLeastValidators(min: number):ValidatorFn {
  return (ctrl: AbstractControl):ValidationErrors | null => {
    const value = (ctrl as FormArray).controls;
    return value.length >= min ? null : {notEnough : true};
  }
}
