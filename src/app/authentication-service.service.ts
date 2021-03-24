import { AuthInterceptorService } from './auth-interceptor.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationServiceService {
  data;
  public loginData;
  y: any;
  msg: string;
  action = 'close';
  loginn;
 public apithree;
  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private router: Router,
   
  ) {}
  login(email, password) {
    return this.http
      .post('https://verify.flexm.com/api/token/authenticate', {
        Contact_Email: email,
        password: password,
      })
      .pipe(take(1))
      .subscribe((responseData) => {
        this.loginn = responseData;
        if (this.loginn.msg === 'success') {
          this.msg = 'Login Successfull..!';

          this.snackbar.open(this.msg, this.action, {
            duration: 5000,
          });
          this.router.navigate(['/documentList']);
          this.loginData = responseData;
          return responseData;
        } else {
          (this.msg = 'Email & Password Not Found'),
            this.snackbar.open(this.msg, this.action, {
              duration: 5000,
            });
        }
      });
  }
  token;
  documentList() {
    this.token = this.loginData.data;

    return this.http.post(
      'https://verify.flexm.com/api/scans/scanDocByTenent',
      {
        Tenant_ID: '',
        limit: '10',
        pageNo: '1',
        order: '-1',
        search: '',
        fieldName: '',
        startDate: '2021-03-01T18:30:00.000Z',
        endDate: '2021-03-30T18:30:00.000Z',
        status: '',
      },
      { headers: new HttpHeaders({ 'access-token': this.token }) }
    );
  }
token1;
db;
tok="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvdGNvZHRlc3RAZ21haWwuY29tIiwiYWNjX2lkIjoiMSIsInVzZXJfaWQiOiI2MDQ1YmZiNjkwMGZlOTA5NDk0OTA2NzEiLCJpYXQiOjE2MTY1NTk2NDYsImV4cCI6MTc3MjA3OTY0Nn0.dRVp6H82izrgtoIZHDvDiYWz_r4YLTnPjB9EJSU193Q"
documentDetails(){
  console.log('id',this.apithree )
console.log('docuement details',this.apithree)



return this.http.get('https://verify.flexm.com/api/scans/allScanByDocumentId/'+this.apithree,{
  headers: new HttpHeaders({"access-token" : this.token})
})
}
}