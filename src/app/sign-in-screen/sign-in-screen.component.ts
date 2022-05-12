import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-screen',
  templateUrl: './sign-in-screen.component.html',
  styleUrls: ['./sign-in-screen.component.css']
})
export class SignInScreenComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router:Router) { }

  
  signin = this.formBuilder.group({
    userName:['',this.validateEmail,Validators.required],
    password:['',[Validators.required,this.validatePassword,Validators.minLength(8)]]
  });

  validateEmail(emails:any){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/.test(emails.value) ? null : emails;
  }

  validatePassword(password:any){
    return /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/.test(password.value) ? null : password;
  }

  ngOnInit(): void {

  }

  signupNavigation(){
    this.router.navigate(['/signUp']);
  }

}
