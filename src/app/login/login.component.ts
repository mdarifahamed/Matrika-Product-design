import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  form!:FormGroup
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
   
  }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      name:new FormControl('',[Validators.required, Validators.pattern('[a-z A-Z]+$')]),
      email:new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('', [Validators.required, Validators.minLength(5)]),
      phone:new FormControl('',[Validators.required, Validators.minLength(10)]),
    });
    
   
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onclick(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
