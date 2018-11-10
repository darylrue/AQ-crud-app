import {FormGroup, ValidationErrors} from "@angular/forms";

export class ValidationErrorService {

  static getValidationErrors(formGroup: FormGroup, properNames: { [key: string]: string; }): string[] {
    let errors: string[] = [];
    Object.keys(formGroup.controls).forEach(key => {
      const controlErrors: ValidationErrors = formGroup.get(key).errors;
      if(controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          switch(keyError) {
            case 'required':
              errors.push(properNames[key] + ' is required.');
              break;
            case 'minlength':
              errors.push(properNames[key] + ' must be at least ' +
                controlErrors[keyError].requiredLength + ' characters.');
              break;
            case 'maxlength':
              errors.push(properNames[key] + ' must be no more than ' +
                controlErrors[keyError].requiredLength + ' characters.');
              break;
          }
        });
      }
    });
    return errors;
  }

}
