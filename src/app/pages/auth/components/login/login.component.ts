import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{


  form: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),

  });
  

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  

  ngOnInit(): void {
    
  }

  submit(){
    this.form.markAllAsTouched()
    if(this.form.invalid) return


    
    this.authService.login(this.form.value).subscribe(res => {
      this.router.navigate(['auth/login'])
    })
  }

}
