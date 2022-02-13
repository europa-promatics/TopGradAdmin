import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
// import * as Rx from "rxjs/Rx";
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry, tap, finalize } from 'rxjs/operators';
import { HttpHeaders, HttpErrorResponse, } from '@angular/common/http';
import { NgxUiLoaderService } from "ngx-ui-loader";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../environments/environment';
//import { Login, SnackBarMessage } from "./model";
// import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';


@Injectable({
  providedIn: 'root'
})
export class TopgradserviceService implements HttpInterceptor {

  SERVER_URL = "https://developers.promaticstechnologies.com:3018";

  getToken() {
    return localStorage.getItem("token")
  }

  constructor(private loader: NgxUiLoaderService, private httpClient: HttpClient, private route: ActivatedRoute,
    private router: Router, private http: HttpClient, private _snackBar: MatSnackBar) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    this.loader.start();
    let ok: string;
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.getToken()}`
      }
    });


    return next.handle(request).pipe(
      tap(
        // Succeeds when there is a response; ignore other events
        event => ok = event instanceof HttpResponse ? 'succeeded' : '',
        // Operation failed; error is an HttpErrorResponse
        error => ok = error
      ),
      // Log when response observable either completes or errors
      finalize(() => {
        this.loader.stop();
        const elapsed = Date.now() - started;
        if (ok == "succeeded") {
          const msg = `${request.method} "${request.urlWithParams}"
           ${ok} in ${elapsed} ms.`;
          console.log(msg);
        } else {
          console.log(ok);

          if (ok["status"] == 401) {
            // logout from here
            localStorage.clear()
            sessionStorage.clear()
            this.router.navigate(['auth/login']);
            console.log(ok["status"]);
          } else {
            this.handleError(ok);
          }
        }

      })
    );

  }

  handleError(error) {
    let errorMessage = '';
    if (error.error && error.error.errors) {
      // client-side error and server side
      if (Array.isArray(error.error.errors.msg)) { // validation error message

        if (error.error.errors.msg.length) {
          const ob = error.error.errors.msg[0]
          if (ob.msg == "IS_EMPTY") {
            errorMessage = `${ob.param} missing`
          } else {
            errorMessage = "Parameters missing"

          }
        }
      } else {
        errorMessage = error.error.errors.msg;
      }
    } else {
      // server-side error

      if (error.status == 401) {
        // Unauthorised 
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(['/'])
      }

      console.log(error)
      errorMessage = `${error.message}`;
      // errorMessage = `server is not working`;
    }
    console.log("I am here ", errorMessage);

    // this._snackBar.open(errorMessage, "CLOSE", {
    //   duration: 2000,
    //   horizontalPosition: "center",
    //   verticalPosition: "bottom",
    // });

    // return throwError(errorMessage);
  }





  login(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/login`;
    console.log(API_URL)
    return this.httpClient.post(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }),

      )

  }

  error(error: HttpErrorResponse) {
    let errorMessage;
    let obj = {};
    if (error.error instanceof ErrorEvent) {
      obj = {
        message: error.error.message,
        status: error.status,
      }
      errorMessage = obj;
    } else {
      obj = {
        message: error.error.message,
        status: error.status,
      }
      errorMessage = obj;
      // errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  userlist(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/industry/list/:${data.offset}-:${data.limit}`;
    console.log(API_URL)
    return this.httpClient.get(API_URL, data)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  gradlist(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/user/list/${data.offset}-${data.limit}?role=${data.role}`;
    console.log(API_URL)
    return this.httpClient.get(API_URL, data)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  emplist(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/user/list/${data.offset}-${data.limit}?role=${data.role}`;
    console.log(API_URL)
    return this.httpClient.get(API_URL, data)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }


  sendresetmail(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/forgot/password`;
    console.log(API_URL)
    return this.httpClient.post(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }))
  }

  resetpassword(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/reset/password`;
    console.log(API_URL)
    return this.httpClient.post(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }))
  }

  uploadmedia1(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/upload/homepage/media`;
    console.log(API_URL)
    return this.httpClient.post(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }))
  }

  headersection(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/edit/homepage/content`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }))
  }

  homecontent(): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/homepage/content`;
    console.log(API_URL)
    return this.httpClient.get(API_URL)
      .pipe(
        map(res => {
          return res
        }))
  }


  showMessage(object: any) {
    this._snackBar.open(object.message, object.action ? object.action : "CLOSE", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
    })

  }

  getAboutUsData() {
    let API_URL = `${this.SERVER_URL}/admin/get/about/us/content`;
    console.log(API_URL)
    return this.httpClient.get(API_URL)
      .pipe(
        map(res => {
          return res
        }))
  }

  postAboutUsdata(data:any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/edit/about/us/content`;
    console.log(API_URL)
    return this.httpClient.put(API_URL,data)
      .pipe(
        map(res => {
          return res
        }))
  }
  postHomePageContent(data:any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/edit/homepage/content`;
    console.log(API_URL)
    return this.httpClient.put(API_URL,data)
      .pipe(
        map(res => {
          return res
        }))
  }

}











