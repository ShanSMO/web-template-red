import { Component } from '@angular/core';
import {LoginService} from './services/login.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [LoginService]
})
export class AppComponent {

  userForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    user_name: new FormControl(),
    password: new FormControl()
  });

  constructor(private loginService: LoginService) {

  }

  createUser() {
    const req = this.userForm.value;
    this.loginService.createUser(req).subscribe();
  }

  loadAll() {
    this.loginService.loadAllUsers({}).subscribe();
  }
}
