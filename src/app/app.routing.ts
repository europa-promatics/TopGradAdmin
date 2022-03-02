import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { ForgetPasswordComponent } from './pages/auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';
import { ViewProfileComponent } from './pages/view-profile/view-profile.component';
import { EmployersListComponent } from './pages/employers-list/employers-list.component';
import { EditEmployerComponent } from './views/edit-employer/edit-employer.component';
import { GraduateListComponent } from './pages/graduate-list/graduate-list.component';
import { EditGraduateComponent } from './views/edit-graduate/edit-graduate.component';
import { ViewGraduateComponent } from './views/view-graduate/view-graduate.component';
import { ViewEmployerComponent } from './views/view-employer/view-employer.component';
import { JobsManagementComponent } from './views/jobs-management/jobs-management.component';
import { ViewJobComponent } from './views/view-job/view-job.component';
import { CategoriesManagementComponent } from './views/categories-management/categories-management.component';
import { ViewApplicantComponent } from './views/view-applicant/view-applicant.component';
import { HeaderSectionComponent } from './views/header-section/header-section.component';
import { HomeOurStoryComponent } from './views/home-our-story/home-our-story.component';
import { SomethingForEveryoneComponent } from './views/something-for-everyone/something-for-everyone.component';
import { HowItWorkComponent } from './views/how-it-work/how-it-work.component';
import { SuccessStorySliderComponent } from './views/success-story-slider/success-story-slider.component';
import { RegisterTodayComponent } from './views/register-today/register-today.component';
import { ViewSliderItemComponent } from './views/view-slider-item/view-slider-item.component';
import { AddSliderItemComponent } from './views/add-slider-item/add-slider-item.component';
import { ApplicantsManagementComponent } from './views/applicants-management/applicants-management.component';
import { AddCategoryComponent } from './views/add-category/add-category.component';
import { AddSubCategoryComponent } from './views/add-sub-category/add-sub-category.component';
import { EditSubCategoryComponent } from './views/edit-sub-category/edit-sub-category.component';
import { ViewSubCategoryComponent } from './views/view-sub-category/view-sub-category.component';
import { EditJobComponent } from './views/edit-job/edit-job.component';
import { PaymentManagementComponent } from './views/payment-management/payment-management.component';
import { ViewPaymentComponent } from './views/view-payment/view-payment.component';
import { SubCategoryManagementComponent } from './views/sub-category-management/sub-category-management.component';
import { EditCategoryComponent } from './views/edit-category/edit-category.component';
import { SubAdminManagementComponent } from './views/sub-admin-management/sub-admin-management.component';
import { AddSubAdminComponent } from './views/add-sub-admin/add-sub-admin.component';
import { ViewSubAdminComponent } from './views/view-sub-admin/view-sub-admin.component';
import { EditSubAdminComponent } from './views/edit-sub-admin/edit-sub-admin.component';
import { EmployerHowItWorksComponent } from './views/employer-how-it-works/employer-how-it-works.component';
import { EditEmployerHowItWorksComponent } from './views/edit-employer-how-it-works/edit-employer-how-it-works.component';
import { GraduateHowItWorksComponent } from './views/graduate-how-it-works/graduate-how-it-works.component';
import { EditGraduateHowItWorksComponent } from './views/edit-graduate-how-it-works/edit-graduate-how-it-works.component';
import { PrivacyPolicyComponent } from './pages/content-management/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/content-management/terms-conditions/terms-conditions.component';
import { TermsSubHeadingsComponent } from './pages/content-management/terms-sub-headings/terms-sub-headings.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { ContactListingComponent } from './views/contact-listing/contact-listing.component';
import { OfferManagementComponent } from './views/offer-management/offer-management.component';
import { CareerArticlesComponent } from './views/career-articles/career-articles.component';
import { CareerVideosComponent } from './views/career-videos/career-videos.component';
import { AddArticleComponent } from './views/add-article/add-article.component';
import { ViewArticleComponent } from './views/view-article/view-article.component';
import { EditArticleComponent } from './views/edit-article/edit-article.component';
import { AddVideoComponent } from './views/add-video/add-video.component';
import { ViewVideoComponent } from './views/view-video/view-video.component';
import { EditVideoComponent } from './views/edit-video/edit-video.component';
import { ScheduleInterviewManagementComponent } from './views/schedule-interview-management/schedule-interview-management.component';
import { ViewInterviewComponent } from './views/view-interview/view-interview.component';
import { EditInterviewComponent } from './views/edit-interview/edit-interview.component';
import { RecruitmentSolutionsManagementComponent } from './pages/recruitment-solutions-management/recruitment-solutions-management.component';
import { ResumeBuilderManagementComponent } from './pages/resume-builder-management/resume-builder-management.component';
import { VideoIntroComponent } from './views/video-intro/video-intro.component';
import { VideoIntro1Component } from './views/video-intro1/video-intro1.component';
import { VideoIntro2Component } from './views/video-intro2/video-intro2.component';
import { VideoIntro3Component } from './views/video-intro3/video-intro3.component';
import { GraduateVerificationManagementComponent } from './pages/graduate-verification-management/graduate-verification-management.component';
import { FaqsComponent } from './views/faqs/faqs.component';
import { GraduateAddFaqComponent } from './pages/support-management/faq_emp-grad/graduate-add-faq/graduate-add-faq.component';
import { GraduateEditFaqComponent } from './pages/support-management/faq_emp-grad/graduate-edit-faq/graduate-edit-faq.component';
import { AddFaqComponent } from './pages/support-management/faq_emp-grad/add-faq/add-faq.component';
import { EditFaqComponent } from './pages/support-management/faq_emp-grad/edit-faq/edit-faq.component';
import { ViewFaqComponent } from './pages/support-management/faq_emp-grad/view-faq/view-faq.component';
import { AboutUsComponent } from './pages/content-management/about-us/about-us.component';
import { HomepageManagementComponent } from './pages/homepage-management/homepage-management.component';
import { GraduateFaqComponent } from './pages/support-management/faq_emp-grad/graduate-faq/graduate-faq.component';
import { ViewSubHeadingComponent } from './pages/content-management/view-sub-heading/view-sub-heading.component';
// import { IndustrylistComponent } from './pages/content-management/industry-management/industrylist.component';
import { HelpManagementComponent } from './views/help-management/help-management.component';
import { ViewHelpComponent } from './views/view-help/view-help.component';
import { MessagingReportsComponent } from './views/messaging-reports/messaging-reports.component';
import { VerificationSubmissionsComponent } from './views/verification-submissions/verification-submissions.component';
import { OfferSubmissionsComponent } from './views/offer-submissions/offer-submissions.component';
import { ViewVerificationComponent } from './views/view-verification/view-verification.component';
import { ViewOfferComponent } from './views/view-offer/view-offer.component';
import { ViewReportComponent } from './views/view-report/view-report.component';
import { AuthguardGuard } from './authguard.guard';
import { AddHeadingComponent } from './pages/content-management/add-heading/add-heading.component';
import { EditHeadingComponent } from './pages/content-management/edit-heading/edit-heading.component';
import { EditSubHeadingComponent } from './pages/content-management/edit-sub-heading/edit-sub-heading.component';
import { AddSubHeadingComponent } from './pages/content-management/add-sub-heading/add-sub-heading.component';



export const routes: Routes = [
  {
    path: '',
    
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'forgetPassword',
    component: ForgetPasswordComponent,
    data:{
      title: 'Forget Passowrd'
    }
  },
  {
      path: 'reset-password/:verification/:token',
      component: ResetPasswordComponent,
      data:{
        title: 'Reset Passowrd'
      }
    },
  {
    path: '',
    canActivate: [AuthguardGuard],
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
      path: 'employersFaq',
      loadChildren: () => import('./pages/support-management/faq_emp-grad/employer-faq/employer-faq.module').then(m => m.EmployerFaqModule)
      },
      {
        path: 'graduateFaq',
        loadChildren: () => import('./pages/support-management/faq_emp-grad/graduate-faq/graduate-faq.module').then(m => m.GraduateFaqModule)
        },
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'userManagement',
        loadChildren: () => import('./pages/user-management/user-management.module').then(m => m.UserManagementModule)
      },
      {
        path: 'employersList',
        loadChildren: () => import('./pages/employers-list/employers-list.module').then(m => m.EmployersListModule)
      },
      {
        path: 'graduateList',
        loadChildren: () => import('./pages/graduate-list/graduate-list.module').then(m => m.GraduateListModule)
      },
      {
        path: 'addHeading/:type',
        loadChildren: () => import('./pages/content-management/add-heading/add-heading.module').then(m => m.AddHeadingModule)
      },
      {
        path: 'addSubHeading/:id/:type',
        loadChildren: () => import('./pages/content-management/add-sub-heading/add-sub-heading.module').then(m => m.AddSubHeadingModule)
      },
      
       {
        path: 'editHeading/:id',
        loadChildren: () => import('./pages/content-management/edit-heading/edit-heading.module').then(m => m.EditHeadingModule)
      },
      {
        path: 'viewSubHeading/:content_id/:id',
        loadChildren: () => import('./pages/content-management/view-sub-heading/view-sub-heading.module').then(m => m.ViewSubHeadingModule)
      },
      {
        path: 'editSubHeading/:content_id/:id',
        loadChildren: () => import('./pages/content-management/edit-sub-heading/edit-sub-heading.module').then(m => m.EditSubHeadingModule)
      },
      {
        path: 'editEmployer',
        loadChildren: () => import('./views/edit-employer/edit-employer.module').then(m => m.EditEmployerModule)
      },
      {
        path: 'editGraduate',
        loadChildren: () => import('./views/edit-graduate/edit-graduate.module').then(m => m.EditGraduateModule)
      },
      {
        path: 'viewGraduate',
        loadChildren: () => import('./views/view-graduate/view-graduate.module').then(m => m.ViewGraduateModule)
      },
      {
        path: 'viewEmployer',
        loadChildren: () => import('./views/view-employer/view-employer.module').then(m => m.ViewEmployerModule)
      },
      {
        path: 'jobsManagement',
        loadChildren: () => import('./views/jobs-management/jobs-management.module').then(m => m.JobsManagementModule)
      },
      {
        path: 'viewJob',
        loadChildren: () => import('./views/view-job/view-job.module').then(m => m.ViewJobModule)
      },
      {
        path: 'viewApplicant',
        loadChildren: () => import('./views/view-applicant/view-applicant.module').then(m => m.ViewApplicantModule)
      },
      {
        path: 'categoriesManagement',
        loadChildren: () => import('./views/categories-management/categories-management.module').then(m => m.CategoriesManagementModule)
      },
      {
        path: 'headerSection',
        loadChildren: () => import('./views/header-section/header-section.module').then(m => m.HeaderSectionModule)
      },
      {
        path: 'homeOurStory',
        loadChildren: () => import('./views/home-our-story/home-our-story.module').then(m => m.HomeOurStoryModule)
      },
      {
        path: 'somethingForEveryone',
        loadChildren: () => import('./views/something-for-everyone/something-for-everyone.module').then(m => m.SomethingForEveryoneModule)
      },
      {
        path: 'howItWork',
        loadChildren: () => import('./views/how-it-work/how-it-work.module').then(m => m.HowItWorkModule)
      },
      {
        path: 'successStorySlider',
        loadChildren: () => import('./views/success-story-slider/success-story-slider.module').then(m => m.SuccessStorySliderModule)
      },
      {
        path: 'registerToday',
        loadChildren: () => import('./views/register-today/register-today.module').then(m => m.RegisterTodayModule)
      },
      {
        path: 'viewSliderItem',
        loadChildren: () => import('./views/view-slider-item/view-slider-item.module').then(m => m.ViewSliderItemModule)
      },
      {
        path: 'addSliderItem',
        loadChildren: () => import('./views/add-slider-item/add-slider-item.module').then(m => m.AddSliderItemModule)
      },
      {
        path: 'applicantsManagement',
        loadChildren: () => import('./views/applicants-management/applicants-management.module').then(m => m.ApplicantsManagementModule)
      },
      {
        path: 'addCategory',
        loadChildren: () => import('./views/add-category/add-category.module').then(m => m.AddCategoryModule)
      },
      {
        path: 'editCategory',
        loadChildren: () => import('./views/edit-category/edit-category.module').then(m => m.EditCategoryModule)
      },
      {
        path: 'addSubCategory',
        loadChildren: () => import('./views/add-sub-category/add-sub-category.module').then(m => m.AddSubCategoryModule)
      },
      {
        path: 'subCategoryManagement',
        loadChildren: () => import('./views/sub-category-management/sub-category-management.module').then(m => m.SubCategoryManagementModule)
      },
      {
        path: 'editSubCategory',
        loadChildren: () => import('./views/edit-sub-category/edit-sub-category.module').then(m => m.EditSubCategoryModule)
      },
      {
        path: 'viewSubCategory',
        loadChildren: () => import('./views/view-sub-category/view-sub-category.module').then(m => m.ViewSubCategoryModule)
      },
      {
        path: 'editJob',
        loadChildren: () => import('./views/edit-job/edit-job.module').then(m => m.EditJobModule)
      },
      {
        path: 'paymentManagement',
        loadChildren: () => import('./views/payment-management/payment-management.module').then(m => m.PaymentManagementModule)
      },
      {
        path: 'viewPayment',
        loadChildren: () => import('./views/view-payment/view-payment.module').then(m => m.ViewPaymentModule)
      },
      {
        path: 'subAdminManagement',
        loadChildren: () => import('./views/sub-admin-management/sub-admin-management.module').then(m => m.SubAdminManagementModule)
      },
      {
        path: 'addSubAdmin',
        loadChildren: () => import('./views/add-sub-admin/add-sub-admin.module').then(m => m.AddSubAdminModule)
      },
      {
        path: 'editSubAdmin',
        loadChildren: () => import('./views/edit-sub-admin/edit-sub-admin.module').then(m => m.EditSubAdminModule)
      },
      {
        path: 'viewSubAdmin',
        loadChildren: () => import('./views/view-sub-admin/view-sub-admin.module').then(m => m.ViewSubAdminModule)
      },
      {
        path: 'employerHowItWorks',
        loadChildren: () => import('./views/employer-how-it-works/employer-how-it-works.module').then(m => m.EmployerHowItWorksModule)
      },
      {
        path: 'editEmployerHowItWorks',
        loadChildren: () => import('./views/edit-employer-how-it-works/edit-employer-how-it-works.module').then(m => m.EditEmployerHowItWorksModule)
      },
      {
        path: 'graduateHowItWorks',
        loadChildren: () => import('./views/graduate-how-it-works/graduate-how-it-works.module').then(m => m.GraduateHowItWorksModule)
      },
      {
        path: 'editGraduateHowItWorks',
        loadChildren: () => import('./views/edit-graduate-how-it-works/edit-graduate-how-it-works.module').then(m => m.EditGraduateHowItWorksModule)
      },
      {
        path: 'viewProfile',
        loadChildren: () => import('./pages/view-profile/view-profile.module').then(m => m.ViewProfileModule)
      },
      {
        path: 'changePassword',
        loadChildren: () => import('./pages/change-password/change-password.module').then(m => m.ChangePasswordModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'privacy-policy',
        loadChildren: () => import('./pages/content-management/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule)
      },
      {
        path: 'terms-conditions',
        loadChildren: () => import('./pages/content-management/terms-conditions/terms-conditions.module').then(m => m.TermsConditionsModule)
      },
      {
        path: 'terms-conditions-sub-headings/:id/:type',
        loadChildren: () => import('./pages/content-management/terms-sub-headings/terms-sub-headings.module').then(m => m.TermsSubHeadingsModule)
      },
      {
        path: 'contact-us/:id',
        loadChildren: () => import('./views/contact-us/contact-us.module').then(m => m.ContactUsModule)
      },
      {
        path: 'contact-listing',
        loadChildren: () => import('./views/contact-listing/contact-listing.module').then(m => m.ContactListingModule)
      },
      {
        path: 'offer-management',
        loadChildren: () => import('./views/offer-management/offer-management.module').then(m => m.OfferManagementModule)
      },
     
      {
        path: 'career-videos',
        loadChildren: () => import('./views/career-videos/career-videos.module').then(m => m.CareerVideosModule)
      },
      {
        path: 'add-article',
        loadChildren: () => import('./views/add-article/add-article.module').then(m => m.AddArticleModule)
      },
      {
        path: 'view-article',
        loadChildren: () => import('./views/view-article/view-article.module').then(m => m.ViewArticleModule)
      },
      {
        path: 'edit-article',
        loadChildren: () => import('./views/edit-article/edit-article.module').then(m => m.EditArticleModule)
      },
      {
        path: 'add-video',
        loadChildren: () => import('./views/add-video/add-video.module').then(m => m.AddVideoModule)
      },
      {
        path: 'view-video',
        loadChildren: () => import('./views/view-video/view-video.module').then(m => m.ViewVideoModule)
      },
      {
        path: 'edit-video',
        loadChildren: () => import('./views/edit-video/edit-video.module').then(m => m.EditVideoModule)
      },
      {
        path: 'schedule-interview-management',
        loadChildren: () => import('./views/schedule-interview-management/schedule-interview-management.module').then(m => m.ScheduleInterviewManagementModule)
      },
      {
        path: 'view-interview',
        loadChildren: () => import('./views/view-interview/view-interview.module').then(m => m.ViewInterviewModule)
      },
      {
        path: 'edit-interview',
        loadChildren: () => import('./views/edit-interview/edit-interview.module').then(m => m.EditInterviewModule)
      },
      {
        path: 'recruitment-solutions-management',
        loadChildren: () => import('./pages/recruitment-solutions-management/recruitment-solutions-management.module').then(m => m.RecruitmentSolutionsManagementModule)
      },
      {
        path: 'resume-builder-management',
        loadChildren: () => import('./pages/resume-builder-management/resume-builder-management.module').then(m => m.ResumeBuilderManagementModule)
      },
      {
        path: 'videoIntro',
        loadChildren: () => import('./views/video-intro/video-intro.module').then(m => m.VideoIntroModule)
      },
      {
        path: 'videoIntro1',
        loadChildren: () => import('./views/video-intro1/video-intro1.module').then(m => m.VideoIntro1Module)
      },
      {
        path: 'videoIntro2',
        loadChildren: () => import('./views/video-intro2/video-intro2.module').then(m => m.VideoIntro2Module)
      },
      {
        path: 'videoIntro3',
        loadChildren: () => import('./views/video-intro3/video-intro3.module').then(m => m.VideoIntro3Module)
      },
      {
        path: 'graduate-verification-management',
        loadChildren: () => import('./pages/graduate-verification-management/graduate-verification-management.module').then(m => m.GraduateVerificationManagementModule)
      },
      {
      path: 'graduate-add-faq',
      loadChildren: () => import('./pages/support-management/faq_emp-grad/graduate-add-faq/graduate-add-faq.module').then(m => m.GraduateAddFaqModule)
      },
      {
      path: 'graduate-edit-faq/:id',
      loadChildren: () => import('./pages/support-management/faq_emp-grad/graduate-edit-faq/graduate-edit-faq.module').then(m => m.GraduateEditFaqModule)
      },
      {
      path: 'add-faq',
      loadChildren: () => import('./pages/support-management/faq_emp-grad/add-faq/add-faq.module').then(m => m.AddFaqModule)
      },
      {
      path: 'edit-faq/:id',
      loadChildren: () => import('./pages/support-management/faq_emp-grad/edit-faq/edit-faq.module').then(m => m.EditFaqModule)
      },
      {
      path: 'view-faq/:id',
      loadChildren: () => import('./pages/support-management/faq_emp-grad/view-faq/view-faq.module').then(m => m.ViewFaqModule)
      },
        
      // {
      //   path: 'faqs',
      //   loadChildren: () => import('./views/faqs/faqs.module').then(m => m.FaqsModule)
      // },
      // {
      //   path: 'add-faq',
      //   loadChildren: () => import('./views/add-faq/add-faq.module').then(m => m.AddFaqModule)
      // },
      // {
      //   path: 'edit-faq',
      //   loadChildren: () => import('./views/edit-faq/edit-faq.module').then(m => m.EditFaqModule)
      // },
      // {
      //   path: 'view-faq',
      //   loadChildren: () => import('./views/view-faq/view-faq.module').then(m => m.ViewFaqModule)
      // },
      {
        path: 'about-us',
        loadChildren: () => import('./pages/content-management/about-us/about-us.module').then(m => m.AboutUsModule)
      },
      {
        path: 'homePageManagement',
        loadChildren: () => import('./pages/homepage-management/homepage-management.module').then(m => m.HomepageManagementModule)
      },
      {
        path: 'industryManagement',
        loadChildren: () => import('./pages/content-management/industry-management/industrylist/industrylist.module').then(m => m.IndustrylistModule)
      },
      {
        path: 'help-management',
        loadChildren: () => import('./views/help-management/help-management.module').then(m => m.HelpManagementModule)
      },
      {
        path: 'view-help/:id',
        loadChildren: () => import('./views/view-help/view-help.module').then(m => m.ViewHelpModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('./views/messaging-reports/messaging-reports.module').then(m => m.MessagingReportsModule)
      },
      {
        path: 'verification-submissions',
        loadChildren: () => import('./views/verification-submissions/verification-submissions.module').then(m => m.VerificationSubmissionsModule)
      },
      {
        path: 'offer-submissions',
        loadChildren: () => import('./views/offer-submissions/offer-submissions.module').then(m => m.OfferSubmissionsModule)
      },
      {
        path: 'view-verification',
        loadChildren: () => import('./views/view-verification/view-verification.module').then(m => m.ViewVerificationModule)
      },
      {
        path: 'view-offer',
        loadChildren: () => import('./views/view-offer/view-offer.module').then(m => m.ViewOfferModule)
      },
      {
        path: 'view-report',
        loadChildren: () => import('./views/view-report/view-report.module').then(m => m.ViewReportModule)
      }

    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
