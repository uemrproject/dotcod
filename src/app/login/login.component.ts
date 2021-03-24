import { AuthenticationServiceService } from './../authentication-service.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private snackbar: MatSnackBar,
    private authService: AuthenticationServiceService,
    private router: Router
  ) {}

  email$;
  hide: boolean = true;
  login$;
  emaillogin(event) {
    this.email$ = event;
    this.email$ = this.email$.toLowerCase();
  }
  onForgotPassword() {}

  password$: any;
  passwordlogin(event) {
    this.password$ = event;
  }
  msg;
  action = 'close';
  signin(login) {
    if (!window.navigator.onLine) {
      (this.msg = 'You are offline.Connect to internet and try again'),
        this.snackbar.open(this.msg, this.action, {
          duration: 2000,
        });
      return;
    }

    if (login.invalid) {
      this.msg = ' Invalid Data';
      this.snackbar.open(this.msg, this.action, {
        duration: 5000,
      });

      return;
    } else {
     this.login$= this.authService
        .login(this.email$, this.password$)
       
    //     .pipe(take(1))
    //     .subscribe(
    //       (ResponseData) => {
    //         this.login$ = ResponseData;
    //         this.msg = 'Login Successfull..!';
    //         this.authService.loginData = this.login$.data;
    //         this.snackbar.open(this.msg, this.action, {
    //           duration: 5000,
    //         });
    //        
    //       },
    //       (error) => {
    //         this.msg = 'Unauthenticated Access..!';
    //         this.snackbar.open(this.msg, this.action, {
    //           duration: 5000,
    //         });
    //       }
    //     );
     }
  }
 
  ngOnInit(): void {}
}
