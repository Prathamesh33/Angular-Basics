import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  
  constructor(private router: Router){}
  // private _formBuilder: any;
  // form = this._formBuilder.group({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // });

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  //router: any;
  
  submit() {
    console.log('hello');
    this.router.navigate(['/home']);
    if (this.form.valid) {
      
      this.submitEM.emit(this.form.value);
      
    }
  }
  @Input()
  error!: string | null | 'hello';

  @Output() submitEM = new EventEmitter();
}
