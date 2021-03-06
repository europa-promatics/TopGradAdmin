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
    private router: Router, private http: HttpClient, private _snackBar: MatSnackBar) { 
      this.getAdmin();
    }
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

  // userlist(data: any): Observable<any> {
  //   let API_URL = `${this.SERVER_URL}/admin/get/industry/list/:${data.offset}-:${data.limit}`;
  //   console.log(API_URL)
  //   return this.httpClient.get(API_URL, data)
  //     .pipe(
  //       map(res => {
  //         return res
  //       }),
  //       catchError(this.error)
  //     )
  // }

  getAdmin(){
    const data = localStorage.getItem('admin_data')
    console.log("adminType",data);
    
    return data;
  }

  industryList(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/industry/list/${data.offset}-${data.limit}?type=${data.type}&search=${data.search}`;
    console.log(API_URL)
    return this.httpClient.get(API_URL, data)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }
  graduateIndustryList(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/industry/list/${data.offset}-${data.limit}?type=graduate`;
    console.log(API_URL)
    return this.httpClient.get(API_URL, data)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  addIndustry(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/add/edit/industry`;
    console.log(API_URL)
    return this.httpClient.post(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }))
  }


  addEditIndustryDetail(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/industry/details/${obj.industry_id}`;
    console.log(API_URL)
    return this.httpClient.get(API_URL)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  industryDelete(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/delete/industry`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  skillsList(evt): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/skills/list?limit=${evt.limit}&offset=${evt.offset}&search=${evt.search}`;
    console.log(API_URL)
    return this.httpClient.get(API_URL)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }


  // gradlist(data: any): Observable<any> {
  //   let API_URL = `${this.SERVER_URL}/admin/get/user/list/${data.offset}-${data.limit}?search=${data.search}&role=${data.role}&filter=${data.filter}`;
  //   console.log(API_URL)
  //   return this.httpClient.get(API_URL, data)
  //     .pipe(
  //       map(res => {
  //         return res
  //       }),
  //       catchError(this.error)
  //     )
  // }

  gradlist(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/user/list/${data.offset}-${data.limit}?search=${data.search}&role=${data.role}`;
    if (data.work_preference) {
      API_URL = `${this.SERVER_URL}/admin/get/user/list/${data.offset}-${data.limit}?search=${data.search}&role=${data.role}&work_preference=${data.work_preference}`;
    }
    else if (data.availability) {
      API_URL = `${this.SERVER_URL}/admin/get/user/list/${data.offset}-${data.limit}?search=${data.search}&role=${data.role}&availability=${data.availability}`;
    }
    else if (data.work_right) {
      API_URL = `${this.SERVER_URL}/admin/get/user/list/${data.offset}-${data.limit}?search=${data.search}&role=${data.role}&work_right=${data.work_right}`;
    }
    console.log(API_URL)
    return this.httpClient.get(API_URL, data)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  getGradDropDown(): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/dropdown/options/graduate_work_rights`;
    console.log(API_URL)
    return this.httpClient.get(API_URL)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  emplist(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/user/list/${data.offset}-${data.limit}?role=${data.role}&search=${data.search}`;
    console.log(API_URL)
    return this.httpClient.get(API_URL, data)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  termslist(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/terms/or/privacy/${obj.offset}-${obj.limit}/${obj.type}`;
    console.log(API_URL)
    return this.httpClient.get(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  termsheading(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/terms/privacy/detail?content_id=${obj.content_id}`;
    console.log(API_URL)
    return this.httpClient.get(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  posttermheading(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/edit/terms/privacy`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  addtermheading(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/add/edit/terms/and/privacy`;
    console.log(API_URL)
    return this.httpClient.post(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  deleteterm(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/delete/heading/terms/privacy`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  getsubheading(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/sub-heading/detail/terms/privacy?content_id=${obj.content_id}&sub_heading_id=${obj.sub_heading_id}`;
    console.log(API_URL)
    return this.httpClient.get(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  addtermsubheading(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/add/sub-heading/terms/privacy `;
    console.log(API_URL)
    return this.httpClient.put(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  deletetermsubheading(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/delete/sub-heading/terms/privacy`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, obj)
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

  postAboutUsdata(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/edit/about/us/content`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, data)
      .pipe(
        map(res => {
          return res
        }))
  }
  postHomePageContent(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/edit/homepage/content`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, data)
      .pipe(
        map(res => {
          return res
        }))
  }

  profile(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/edit/profile`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }))
  }

  contactList(evt): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/support/list/${evt.offset}-${evt.limit}?type=${evt.type}&search=${evt.search}`;
    console.log(API_URL)
    return this.httpClient.get(API_URL)
      .pipe(
        map(res => {
          return res
        }))
  }


  contactDetail(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/support/details/${data.support_id}`;
    console.log(API_URL)
    return this.httpClient.get(API_URL)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  contactDelete(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/delete/support/query/${data.support_id}`;
    console.log(API_URL)
    return this.httpClient.delete(API_URL, data)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  contactReply(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/reply/to/support/query`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, data)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  changepwd(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/change/password`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, data)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }


  faqCategories(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/all/faq/categories?user_type=${data.user_type}`;
    console.log(API_URL)
    return this.httpClient.get(API_URL, data)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  faqList(evt): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/faq/list/${evt.offset}-${evt.limit}?user_type=${evt.user_type}&search=${evt.search}`;
    console.log(API_URL)
    return this.httpClient.get(API_URL)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  faqDetail(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/faq/details/${data.faq_id}`;
    console.log(API_URL)
    return this.httpClient.get(API_URL)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  addEditFaq(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/add/edit/faq`;
    console.log(API_URL)
    return this.httpClient.post(API_URL, data)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }
  faqDelete(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/delete/faq/${data.faq_id}`;
    console.log(API_URL)
    return this.httpClient.delete(API_URL, data)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }


  postRecruitmentContent(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/edit/recruitement/solution`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }))
  }

  recruitmentcontent(): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/recruitment-solutions?content_id=6214a49299814ab6e4f4338e`;
    console.log(API_URL)
    return this.httpClient.get(API_URL)
      .pipe(
        map(res => {
          return res
        }))
  }

  uploadbenefitmedia(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/upload/media`;
    console.log(API_URL)
    return this.httpClient.post(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }))
  }

  postResumeBuilderContent(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/update/resume/builder`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }))
  }


  resumebuildercontent(): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/resume/builders?content_id=621c4bbd6f7babe92ccc9618`;
    console.log(API_URL)
    return this.httpClient.get(API_URL)
      .pipe(
        map(res => {
          return res
        }))
  }

  graduateVerificationcontent(): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/graduate/endoresement`;
    console.log(API_URL)
    return this.httpClient.get(API_URL)
      .pipe(
        map(res => {
          return res
        }))
  }

  postGraduateVerificationContent(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/update/graduate/endoresement`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }))
  }

  poststepsArrayContent(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/update/graduate/endoresement/section-4`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }))
  }

  getEmployerDetail(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/user/detail/${obj.user_id}`;
    console.log(API_URL)
    return this.httpClient.get(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  EditEmployerDetail(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/edit/user/detail`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  getGraduateHowItWorks(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/graduate/how-it-works?content_id=621350cc3352bd34948f0634`;
    console.log(API_URL)
    return this.httpClient.get(API_URL, data)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }
  editGraduateHowItWorks(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/edit/graduate/how-it-works`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, data)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }
  uploadEditGraduateHowItsWorks(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/upload/media`;
    console.log(API_URL)
    return this.httpClient.post(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }))
  }
  editGraduateHowItWorksDelete(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/delete/media/graduateHowItWorks`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, data)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  getEmpHowItWorks(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/employer/how-it-works?content_id=62131e0b9a4fb6871a828022`;
    console.log(API_URL)
    return this.httpClient.get(API_URL, data)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  editEmpHowItWorks(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/edit/employer/how-it-works`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, data)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }


  editEmpHowItWorksDelete(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/delete/media/employerHowItWorks`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, data)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  deleteuser(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/edit/user/detail`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, data)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  videointrocontent(): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/video/intro`;
    console.log(API_URL)
    return this.httpClient.get(API_URL)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  postVideoIntroContent(data: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/edit/video/intro`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, data)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  jobManagementList(evt): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/employer/job/post/list?limit=${evt.limit}&offset=${evt.offset}&search=${evt.search}`;
    console.log(API_URL)
    return this.httpClient.get(API_URL)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  jobManagementDetail(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/employer/job/detail?employer_job_id=${obj.employer_job_id}`;
    console.log(API_URL)
    return this.httpClient.get(API_URL)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  jobManagementDelete(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/delete/employer/job/post`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }


  addArticleContent(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/add/article`;
    console.log(API_URL)
    return this.httpClient.post(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  getarticleList(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/article/list?limit=${obj.limit}&offset=${obj.offset}&search=${obj.search}&type=article`;
    console.log(API_URL)
    return this.httpClient.get(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  getvideoList(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/article/list?limit=${obj.limit}&offset=${obj.offset}&search=${obj.search}&type=video`;
    console.log(API_URL)
    return this.httpClient.get(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }


  getArticleContent(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/view/article?article_id=${obj.article_id}`;
    console.log(API_URL)
    return this.httpClient.get(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  editArticleContent(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/edit/article`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  delArticle(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/delete/article/${obj.article_id}`;
    console.log(API_URL)
    return this.httpClient.delete(API_URL)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  ApplicationReports(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/report/applications?offset=${obj.offset}&limit=${obj.limit}`;
    console.log(API_URL)
    return this.httpClient.get(API_URL)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  ReportsDetail(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/report/applications?id=${obj.id}`;
    console.log(API_URL)
    return this.httpClient.get(API_URL)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  ReportReply(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/update/report`;
    console.log(API_URL)
    return this.httpClient.patch(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  ReportDelete(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/delete/report/${obj.id}`;
    console.log(API_URL)
    return this.httpClient.delete(API_URL)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  BlockGraduateProfile(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/edit/user/detail`;
    console.log(API_URL)
    return this.httpClient.put(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  // 06-july-2022
  getInterviewListing(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/interviews?limit=${obj.limit}&offset=${obj.offset}&search=${obj.search}&type=${obj.type}`;
    console.log("service API_URL>>>", API_URL)
    return this.httpClient.get(API_URL).pipe(
      map(res => {
        return res
      }),
      catchError(this.error)
    )

  }

  // deleteInterview(obj:any):Observable<any>{
  //   let API_URL=`${this.SERVER_URL}/admin/delete/interview/${obj.id}`;
  //   console.log("Get Service API_URL>>>",API_URL)
  //   return this.httpClient.delete(API_URL).pipe(
  //     map(res=>{
  //       return res
  //     }),
  //     catchError(this.error)
  //   )
  // }

  detailOfInterview(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/interviews?id=${obj.id}`;
    console.log("Detail Service API_URL>>", API_URL);
    return this.httpClient.get(API_URL).pipe(
      map(res => {
        return res
      }),
      catchError(this.error)
    )

  }

  // 07-july-2022-- paymenet management---

  getPaymentdata(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/payments?limit=${obj.limit}&offset=${obj.offset}&search=${obj.search}`;
    console.log("Get Payment API_URL>>>", API_URL);
    return this.httpClient.get(API_URL).pipe(
      map(res => {
        return res
      }),
      catchError(this.error)
    )

  }

  detailOfPayment(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/payments?id=${obj.id}`;
    console.log("Detail Service API_URL>>", API_URL);
    return this.httpClient.get(API_URL).pipe(
      map(res => {
        return res
      }),
      catchError(this.error)
    )

  }


  // 07-july-2022 -- offer submission--

  getOfferSubmissiondata(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/interviews?limit=${obj.limit}&offset=${obj.offset}&search=${obj.search}`;
    console.log("Get Offer Submission API_URL>>>", API_URL);
    return this.httpClient.get(API_URL).pipe(
      map(res => {
        return res
      }),
      catchError(this.error)
    )

  }

  detailOfOfferSubmission(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/interviews?id=${obj.id}`;
    console.log("Detail Service API_URL>>", API_URL);
    return this.httpClient.get(API_URL).pipe(
      map(res => {
        return res
      }),
      catchError(this.error)
    )

  }

  // 07-july-2022----sub-admin

  addSubAdmin(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/create/sub/admin`;
    console.log(API_URL)
    return this.httpClient.post(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }))
  }

  getSubAdminData(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/sub/admins?limit=${obj.limit}&offset=${obj.offset}&search=${obj.search}`;
    console.log("Get Offer Submission API_URL>>>", API_URL);
    return this.httpClient.get(API_URL).pipe(
      map(res => {
        return res
      }),
      catchError(this.error)
    )

  }

  detailSubAdmin(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/sub/admin/${obj.id}`;
    console.log("Detail Service API_URL>>", API_URL);
    return this.httpClient.get(API_URL).pipe(
      map(res => {
        return res
      }),
      catchError(this.error)
    )

  }

  deleteSubAdmin(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/delete/sub/admin/${obj.id}`;
    console.log("Get Service API_URL>>>", API_URL)
    return this.httpClient.delete(API_URL).pipe(
      map(res => {
        return res
      }),
      catchError(this.error)
    )
  }

  updateSubAdmin(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/update/sub/admin`;
    console.log(API_URL)
    return this.httpClient.patch(API_URL, obj)
      .pipe(
        map(res => {
          return res
        }))
  }

  sendCredentialsSubAdmin(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/send/credentials?id=${obj.id}`;
    console.log("Detail Service API_URL>>", API_URL);
    return this.httpClient.get(API_URL).pipe(
      map(res => {
        return res
      }),
      catchError(this.error)
    )

  }

  getAccessPrivilegeSubAdmin(obj:any):Observable<any>{
    let API_URL=`${this.SERVER_URL}/admin/get/access/privileges/${obj.id}`;
    console.log("get access privilege service Api Url>>>",API_URL);
    return this.httpClient.get(API_URL,obj).pipe(
      map(res=>{
        return res
      }),
      catchError(this.error)
    )
    
  }
  updtaeAccessPrivilegeSubAdmin(obj:any):Observable<any>{
    let API_URL=`${this.SERVER_URL}/admin/update/access/privileges`;
    console.log("update access privilege service>>>",API_URL);
    return this.httpClient.patch(API_URL,obj).pipe(
      map(res=>{
        return res
      }),
      catchError(this.error)
    )
  }

  // verification submission-----------------

  getVerificationSubmission(obj:any):Observable<any>{
    let API_URL = `${this.SERVER_URL}/admin/verification/submissions?limit=${obj.limit}&offset=${obj.offset}&search=${obj.search}`;
    console.log("Get Offer Submission API_URL>>>", API_URL);
    return this.httpClient.get(API_URL).pipe(
      map(res => {
        return res
      }),
      catchError(this.error)
    )
  }

  deleteVerificationSubmission(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/delete/verification/submissions/${obj.submission_id}`;
    console.log("Delete Verification Submission Service API_URL>>>", API_URL)
    return this.httpClient.delete(API_URL).pipe(
      map(res => {
        return res
      }),
      catchError(this.error)
    )

  }

  detailVerificationSubmission(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/get/verification_submission/details/${obj.submission_id}`;
    console.log("Detail Verification Submission Service API_URL>>", API_URL);
    return this.httpClient.get(API_URL).pipe(
      map(res => {
        return res
      }),
      catchError(this.error)
    )

  }

  toggleVerificationSubmission(obj: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/admin/update/verification/status`;
    console.log("toggle status service >>>>", API_URL);
    return this.httpClient.patch(API_URL,obj).pipe(
      map(res => {
        return res
      }),
      catchError(this.error)
    )

  }



}
