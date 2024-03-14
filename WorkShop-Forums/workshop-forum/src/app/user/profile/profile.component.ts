import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { UserForAuth } from 'src/app/types/user';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { CONST_EMAIL_DOMAINS } from 'src/app/shared/constants';


interface Profile {
  username: string,
  email: string,
  phone: string,
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isEditClicked: boolean = false;
  userData: UserForAuth | undefined;

  user: Profile | undefined;

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(CONST_EMAIL_DOMAINS)]],
    phone: ['', [Validators.required]],
  })

  ngOnInit(): void {
    this.user = { ...this.userData } as Profile;
  }
  constructor(private userService: UserService, private fb: FormBuilder) {
    this.userData = this.userService.user || undefined;
  }

  handleEdit() {
    this.isEditClicked = !this.isEditClicked;
  }

  saveChanges() {
    this.user = { ...this.form.value } as Profile;
    this.handleEdit()
  }

}
