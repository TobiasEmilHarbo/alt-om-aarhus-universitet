import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    email: new FormControl('mail@mail.com', [
      Validators.required
    ]),
    password: new FormControl('123456', [
      Validators.required
    ])
  });

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() { }

  async onSubmit() {

    if (this.form.valid) {

      const email     = this.form.get('email').value;
      const password  = this.form.get('password').value;

      try {
        await this.auth.signIn(email, password);
        this.router.navigate(['/']);
      } catch (error) {
        console.log(error.message);
      }
    }
  }
}
