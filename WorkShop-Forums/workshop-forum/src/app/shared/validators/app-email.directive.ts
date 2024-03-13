import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { appEmailValidator } from './app-email-validator';

@Directive({
  selector: '[appEmail]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AppEmailDirective,
    multi: true
  }]
})
export class AppEmailDirective implements Validator,OnChanges {
  @Input() appEmailInput: string[] = [];

  constructor() {
  }

  validator: ValidatorFn = () => null;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log(this.validator);
    
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const current = changes['appEmailInput'];
    if(changes){
      this.validator = appEmailValidator(current.currentValue)
    }
  }
}
