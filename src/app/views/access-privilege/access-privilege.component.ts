import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TopgradserviceService } from '../../topgradservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-access-privilege',
  templateUrl: './access-privilege.component.html',
  styleUrls: ['./access-privilege.component.scss']
})
export class AccessPrivilegeComponent implements OnInit {
  edit: any;
  approve: any;
  delete: any;
  invoices: any;
  view: any;
  home_page: any;
  how_it_works: any;
  faqs: any;
  id: string;
  allData: any;
  first_name: any;
  last_name: any;
  email: any;
  home_page_management: any;
  industry_management: any;
  how_it_works_management: any;
  career_resources: any;
  video_resume_tips_management: any;
  terms_and_conditions: any;
  privacy_policy: any;
  about_us: any;
  skill_edit: any;
  skill_add: any;
  skill_delete: any;
  gvm_edit: any;
  gvm_add: any;
  rcm_add: any;
  rcm_edit: any;
  rcm_delete: any;
  gvm_delete: any;
  reports: any;
  verifications_submission: any;
  offer_submission: any;
  job_management_edit: any;
  job_management_approve: any;
  job_management_delete: any;
  support_management_contact_us: any;
  support_management_help_management: any;
  support_management_faqs: any;
  login: any;
  error_404: any;
  resume_builder_management_add: any;
  resume_builder_management_delete: any;
  resume_builder_management_edit: any;
  error_500: any;
  interview_management_add: any;
  interview_management_edit: any;
  interview_management_delete: any;
  payment_management_invoices: any;
  payment_management_view: any;
  payment_management_delete: any;
  graduateCheck: any;
  employerCheck: any;
  content_management: any;
  graduate_verification_management: any;
  interview_management: any;
  job_management: any;
  logs: any;
  page: any;
  payment_management: any;
  recruitment_solution_management: any;
  resume_builder_management: any;
  skill_list: any;
  support_management: any;
  user_management: any;
  employers: any;
  graduates: any;
  user_management_check: boolean;
  support_management_check: boolean;
  skill_list_check: boolean;
  content_management_check: boolean;
  graduate_verification_management_check: boolean;
  interview_management_check: boolean;
  job_management_check: boolean;
  logs_check: boolean;
  payment_management_check: boolean;
  page_check: boolean;
  recruitment_solution_management_check: boolean;
  resume_builder_management_check: boolean;
  job_management_edit_Check: any;
  job_management_approve_Check: any;
  job_management_delete_Check: any;
  payment_management_invoices_Check: any;
  payment_management_view_Check: any;
  payment_management_delete_Check: any;
  reports_Check: any;
  verifications_submission_Check: any;
  offer_submission_Check: any;
  interview_management_add_Check: any;
  interview_management_edit_Check: any;
  interview_management_delete_Check: any;
  rcm_delete_Check: any;
  rcm_edit_Check: any;
  rcm_add_Check: any;
  resume_builder_management_add_Check: any;
  resume_builder_management_edit_Check: any;
  resume_builder_management_delete_Check: any;
  gvm_add_Check: any;
  gvm_edit_Check: any;
  gvm_delete_Check: any;
  error_404_Check: any;
  login_Check: any;
  error_500_Check: any;
  skill_edit_Check: any;
  skill_delete_Check: any;
  skill_add_Check: any;
  home_page_management_Check: any;
  industry_management_Check: any;
  how_it_works_management_Check: any;
  career_resources_Check: any;
  terms_and_conditions_Check: any;
  video_resume_tips_management_Check: any;
  privacy_policy_Check: any;
  about_us_Check: any;
  support_management_contact_us_Check: any;
  support_management_help_management_Check: any;
  support_management_faqs_Check: any;
  _id: any;

  constructor(
    private Service: TopgradserviceService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getData()
  }

  //****************************  User Management ****************************************
  userSetAll(completed: boolean) {
    this.graduates = completed;
    this.employers = completed
  }
  //****************************Jobs Management ****************************************
  jobSetAll(completed: boolean) {
    this.job_management_edit = completed;
    this.job_management_approve = completed;
    this.job_management_delete = completed;
  }
  //****************************  Payment Management ****************************************
  paymentSetAll(completed: boolean) {
    this.payment_management_invoices = completed;
    this.payment_management_view = completed;
    this.payment_management_delete = completed;
  }
  //**************************** Interview Mngt ****************************************
  interviewSetAll(completed: boolean) {
    this.interview_management_add = completed;
    this.interview_management_edit = completed;
    this.interview_management_delete = completed;
  }
  //****************************  Recruitment solution Mngt ****************************************
  rcmSetAll(completed: boolean) {
    this.rcm_add = completed;
    this.rcm_edit = completed;
    this.rcm_delete = completed;
  }
  //****************************  Resume Builder Management ****************************************
  rbmSetAll(completed: boolean) {
    this.resume_builder_management_add = completed;
    this.resume_builder_management_edit = completed;
    this.resume_builder_management_delete = completed;
  }
  //**************************** Graduate Verification Management ****************************************
  gradVerificationtSetAll(completed: boolean) {
    this.gvm_add = completed;
    this.gvm_edit = completed;
    this.gvm_delete = completed;

  }
  //****************************   Pages ****************************************
  pageSetAll(completed: boolean) {
    this.login = completed;
    this.error_404 = completed;
    this.error_500 = completed;
  }
  //**************************** Skill List ****************************************
  skillSetAll(completed: boolean) {
    this.skill_add = completed
    this.skill_edit = completed
    this.skill_delete = completed
  }
  //****************************   Support Mngt ****************************************
  supportSetAll(completed: boolean) {
    this.support_management_contact_us = completed;
    this.support_management_help_management = completed;
    this.support_management_faqs = completed;
  }
  //**************************** Logs ****************************************
  logSetAll(completed: boolean) {
    // this.logsComplete = completed;
    this.reports = completed;
    this.verifications_submission = completed;
    this.offer_submission = completed;
  }
  //**************************** Content Management ****************************************
  contentSetAll(completed: boolean) {
    this.home_page_management = completed;
    this.industry_management = completed;
    this.how_it_works_management = completed;
    this.career_resources = completed;
    this.video_resume_tips_management = completed;
    this.terms_and_conditions = completed;
    this.privacy_policy = completed;
    this.about_us = completed;

  }

  ngOnInit(): void {

  }

  // Get Access Privilege API--------
  getData() {

    var obj = {
      id: this.id
    }
    this.Service.getAccessPrivilegeSubAdmin(obj).subscribe((res: any) => {
      console.log("response of get access privilege data is>>>", res);
      this.allData = res.data
      this._id=this.allData._id
      console.log("this (_id)  is>>",this._id);
      
      this.first_name = this.allData.sub_admin_id.first_name
      this.last_name = this.allData.sub_admin_id.last_name
      this.email = this.allData.sub_admin_id.email
      // graduate verification---
      this.graduate_verification_management = this.allData.graduate_verification_management
      this.gvm_add = this.graduate_verification_management.add
      this.gvm_edit = this.graduate_verification_management.edit
      this.gvm_delete = this.graduate_verification_management.delete
      if (this.gvm_add == true || this.gvm_edit == true || this.gvm_delete == true) {
        this.graduate_verification_management_check = true;
      }
      // interview mngt-------
      this.interview_management = this.allData.interview_management
      this.interview_management_add = this.interview_management.add
      this.interview_management_edit = this.interview_management.edit
      this.interview_management_delete = this.interview_management.delete
      if (this.interview_management_add == true || this.interview_management_edit == true || this.interview_management_delete == true) {
        this.interview_management_check = true;
      }
      // job mngt----------
      this.job_management = this.allData.job_management
      this.job_management_edit = this.job_management.edit
      this.job_management_approve = this.job_management.approve
      this.job_management_delete = this.job_management.delete
      if (this.job_management_edit == true || this.job_management_approve == true || this.job_management_delete == true) {
        this.job_management_check = true;
      }
      // logs--------
      this.logs = this.allData.logs
      this.reports = this.logs.reports
      this.verifications_submission = this.logs.verifications_submission
      this.offer_submission = this.logs.offer_submission
      if (this.reports == true || this.verifications_submission == true || this.offer_submission == true) {
        this.logs_check = true;
      }
      // pages--------
      this.page = this.allData.page
      this.login = this.page.login
      this.error_404 = this.page.error_404
      this.error_500 = this.page.error_500
      if (this.login == true || this.error_404 == true || this.error_500 == true) {
        this.page_check = true;
      }
      // payment mngt--------
      this.payment_management = this.allData.payment_management
      this.payment_management_invoices = this.payment_management.invoices
      this.payment_management_view = this.payment_management.view
      this.payment_management_delete = this.payment_management.delete
      if (this.payment_management_invoices == true || this.payment_management_view == true || this.payment_management_delete == true) {
        this.payment_management_check = true;
      }
      // recruitment solution mngt------
      this.recruitment_solution_management = this.allData.recruitment_solution_management
      this.rcm_add = this.recruitment_solution_management.add
      this.rcm_edit = this.recruitment_solution_management.delete
      this.rcm_delete = this.recruitment_solution_management.edit
      if (this.rcm_add == true || this.rcm_edit == true || this.rcm_delete == true) {
        this.recruitment_solution_management_check = true;
      }
      // resume builder mngt
      this.resume_builder_management = this.allData.resume_builder_management
      this.resume_builder_management_add = this.resume_builder_management.add
      this.resume_builder_management_edit = this.resume_builder_management.edit
      this.resume_builder_management_delete = this.resume_builder_management.delete
      if (this.resume_builder_management_add == true || this.resume_builder_management_edit == true || this.resume_builder_management_delete == true) {
        this.resume_builder_management_check = true;
      }
      // skill list ------
      this.skill_list = this.allData.skill_list
      this.skill_add = this.skill_list.add
      this.skill_edit = this.skill_list.delete
      this.skill_delete = this.skill_list.edit
      if (this.skill_add == true || this.skill_edit == true || this.skill_delete == true) {
        this.skill_list_check = true;
      }
      // support mngt----------
      this.support_management = this.allData.support_management
      this.support_management_contact_us = this.support_management.contact_us
      this.support_management_help_management = this.support_management.help_management
      this.support_management_faqs = this.support_management.faqs
      if (this.support_management_contact_us == true || this.support_management_help_management == true || this.support_management_faqs == true) {
        this.support_management_check = true;
      }
      // user mngt--------
      this.user_management = this.allData.user_management
      this.graduates = this.user_management.graduates
      this.employers = this.user_management.employers
      if (this.employers == true || this.graduates == true) {
        this.user_management_check = true;
      }
      // content mngt----------
      this.content_management = this.allData.content_management
      this.about_us = this.content_management.about_us
      this.career_resources = this.content_management.career_resources
      this.home_page_management = this.content_management.home_page_management
      this.how_it_works_management = this.content_management.how_it_works_management
      this.industry_management = this.content_management.industry_management
      this.privacy_policy = this.content_management.privacy_policy
      this.terms_and_conditions = this.content_management.terms_and_conditions
      this.video_resume_tips_management = this.content_management.video_resume_tips_management
      if (this.about_us == true || this.how_it_works_management == true || this.terms_and_conditions == true ||
        this.career_resources == true || this.industry_management == true || this.video_resume_tips_management == true ||
        this.home_page_management == true || this.privacy_policy == true) {
        this.content_management_check = true;
      }

    })

  }

  // user mngt select-----------
  userChangeSelect1(event) {
    this.graduateCheck = event
  }
  userChangeSelect2(event) {
    this.employerCheck = event
  }
  // job mngt select-----------
  jobChangeSelect1(event) {
    this.job_management_edit_Check = event
  }
  jobChangeSelect2(event) {
    this.job_management_approve_Check = event
  }
  jobChangeSelect3(event) {
    this.job_management_delete_Check = event
  }
  // payment mngt select-----------
  paymentChangeSelect1(event) {
    this.payment_management_invoices_Check = event
  }
  paymentChangeSelect2(event) {
    this.payment_management_view_Check = event
  }
  paymentChangeSelect3(event) {
    this.payment_management_delete_Check = event
  }
  //logs select-----------
  logChangeSelect1(event) {
    this.reports_Check = event
  }
  logChangeSelect2(event) {
    this.verifications_submission_Check = event
  }
  logChangeSelect3(event) {
    this.offer_submission_Check = event
  }
  // interview mngt select-----------
  interviewChangeSelect1(event) {
    this.interview_management_add_Check = event
  }
  interviewChangeSelect2(event) {
    this.interview_management_edit_Check = event
  }
  interviewChangeSelect3(event) {
    this.interview_management_delete_Check = event
  }
  //recruitment solution mngt select-----------
  rcmChangeSelect1(event) {
    this.rcm_add_Check = event
  }
  rcmChangeSelect2(event) {
    this.rcm_edit_Check = event
  }
  rcmChangeSelect3(event) {
    this.rcm_delete_Check = event
  }
  // resume builder mngt select-----------
  rbmChangeSelect1(event) {
    this.resume_builder_management_add_Check = event
  }
  rbmChangeSelect2(event) {
    this.resume_builder_management_edit_Check = event
  }
  rbmChangeSelect3(event) {
    this.resume_builder_management_delete_Check = event
  }
  // graduate verification mngt select-----------
  gvmChangeSelect1(event) {
    this.gvm_add_Check = event
  }
  gvmChangeSelect2(event) {
    this.gvm_edit_Check = event
  }
  gvmChangeSelect3(event) {
    this.gvm_delete_Check = event
  }
  // page select-----------

  pageChangeSelect1(event) {
    this.login_Check = event
  }
  pageChangeSelect2(event) {
    this.error_404_Check = event
  }
  pageChangeSelect3(event) {
    this.error_500_Check = event
  }
  // skill list select-----------
  skillChangeSelect1(event) {
    this.skill_add_Check = event
  }
  skillChangeSelect2(event) {
    this.skill_edit_Check = event
  }
  skillChangeSelect3(event) {
    this.skill_delete_Check = event
  }
  // support mngt select-----------
  supportChangeSelect1(event) {
    this.support_management_contact_us_Check = event
  }
  supportChangeSelect2(event) {
    this.support_management_help_management_Check = event
  }
  supportChangeSelect3(event) {
    this.support_management_faqs_Check = event
  }
  // contenet mngt select-----------
  contentChangeSelect1(event) {
    this.home_page_management_Check = event
  }
  contentChangeSelect2(event) {
    this.industry_management_Check = event
  }
  contentChangeSelect3(event) {
    this.how_it_works_management_Check = event
  }
  contentChangeSelect4(event) {
    this.career_resources_Check = event
  }
  contentChangeSelect5(event) {
    this.video_resume_tips_management_Check = event
  }
  contentChangeSelect6(event) {
    this.terms_and_conditions_Check = event
  }
  contentChangeSelect7(event) {
    this.privacy_policy_Check = event
  }
  contentChangeSelect8(event) {
    this.about_us_Check = event
  }


  // update Part -------------

  updateData() {
    var obj = {
      id: this._id,
      user_management: {
        graduates: this.graduates,
        employers: this.employers
      },
      payment_management: {
        invoices: this.payment_management_invoices,
        view: this.payment_management_view,
        delete: this.payment_management_delete
      },
      interview_management: {
        add: this.interview_management_add,
        edit: this.interview_management_edit,
        delete: this.interview_management_delete
      },
      resume_builder_management: {
        add: this.resume_builder_management_add,
        edit: this.resume_builder_management_edit,
        delete: this.resume_builder_management_delete
      },
      page: {
        login: this.login,
        error_404: this.error_404,
        error_500: this.error_500
      },
      support_management: {
        contact_us: this.support_management_contact_us,
        help_management: this.support_management_help_management,
        faqs: this.support_management_faqs
      },
      job_management: {
        edit: this.job_management_edit,
        approve: this.job_management_approve,
        delete: this.job_management_delete
      },
      logs: {
        reports: this.reports,
        verifications_submission: this.verifications_submission,
        offer_submission: this.offer_submission
      },
      recruitment_solution_management: {
        add: this.rcm_add,
        edit: this.rcm_edit,
        delete: this.rcm_delete
      },
      graduate_verification_management: {
        add: this.gvm_add,
        edit: this.gvm_edit,
        delete: this.gvm_delete
      },
      skill_list: {
        add: this.skill_add,
        edit: this.skill_edit,
        delete: this.skill_delete
      },
      content_management: {
        home_page_management: this.home_page_management,
        industry_management: this.industry_management,
        how_it_works_management: this.how_it_works_management,
        career_resources: this.career_resources,
        video_resume_tips_management: this.video_resume_tips_management,
        terms_and_conditions: this.terms_and_conditions,
        privacy_policy: this.privacy_policy,
        about_us: this.about_us
      }
    }
    this.Service.updtaeAccessPrivilegeSubAdmin(obj).subscribe((res: any) => {
      console.log("response of update data is >>>", res);
      this.router.navigate(["/subAdminManagement"])
      this._snackBar.open('Updated data successfully..', 'close', {
        duration: 2000
      })

    })
  }




}







