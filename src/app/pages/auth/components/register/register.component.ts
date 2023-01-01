import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  
  form: FormGroup = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
    confirmPassword: new FormControl("", Validators.required)
  });
  

  constructor(){}

  

  ngOnInit(): void {
    
  }

  submit(){
    this.form.markAllAsTouched()
    if(this.form.invalid) return
    
  }
}
