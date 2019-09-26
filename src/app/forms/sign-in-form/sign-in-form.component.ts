import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    password: new FormControl(null, [
      Validators.required
    ]),
    email: new FormControl(null, [
      Validators.required
    ])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
