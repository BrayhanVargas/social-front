import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(
    public loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }
  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      fullName: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  signup() {
    if (this.form?.valid) {
      this.loginService.signup(this.form.value).subscribe((data: any) => {
        if (data?.token) {
          localStorage.setItem('_token', data.token);
          this.router.navigate(['home'])
        }
      })
    }
  }

}
