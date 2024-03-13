import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CONST_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { matchPasswordsValidator } from 'src/app/shared/validators/app-match-pass-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(CONST_EMAIL_DOMAINS)]],
    telephone: [''],
    passGroup: this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: ['', [Validators.required,]]
    }, { validators: [matchPasswordsValidator('password', 'rePassword')] })
  })
  constructor(private formBuilder: FormBuilder) { }

  register() {

  }
}
