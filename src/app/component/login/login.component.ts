import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { 
    localStorage.setItem(this.key, 'Value');

  }

  ngOnInit(): void {
  }

  key: string = 'username';

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      localStorage.setItem(this.key, this.form.value.username);
      console.log("login data is ",this.form.value.username)
    }
  }


}
