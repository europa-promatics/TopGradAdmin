import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EditorModule } from '@tinymce/tinymce-angular';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {MatTabsModule} from '@angular/material/tabs';
import { PlyrModule } from 'ngx-plyr';

// Material import
import { MaterialModule } from './material.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';



// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { BsModalRef } from 'ngx-bootstrap/modal';

// import { DashboardComponent } from './views/dashboard/dashboard.component';

import { UserManagementComponent } from './pages/user-management/user-management.component';
import { ForgetPasswordComponent } from './pages/auth/forget-password/forget-password.component';
import { ViewProfileComponent } from './views/view-profile/view-profile.component';
// import { EmployersListComponent } from './pages/employers-list/employers-list.component';
// import { EditEmployerComponent } from './pages/UserManagement/edit-employer/edit-employer.component';
// import { GraduateListComponent } from './pages/graduate-list/graduate-list.component';
// import { EditGraduateComponent } from './pages/UserManagement/edit-graduate/edit-graduate.component';
//import { ViewGraduateComponent } from './pages/UserManagement/view-graduate/view-graduate.component';
// import { ViewEmployerComponent } from './pages/UserManagement/view-employer/view-employer.component';
//import { JobsManagementComponent } from './views/jobs-management/jobs-management.component';
//import { ViewJobComponent } from './views/view-job/view-job.component';
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
//import { EditEmployerHowItWorksComponent } from './views/edit-employer-how-it-works/edit-employer-how-it-works.component';
import { GraduateHowItWorksComponent } from './views/graduate-how-it-works/graduate-how-it-works.component';
//import { EditGraduateHowItWorksComponent } from './views/edit-graduate-how-it-works/edit-graduate-how-it-works.component';
//import { PrivacyPolicyComponent } from './pages/content-management/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/content-management/terms-conditions/terms-conditions.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { ContactListingComponent } from './views/contact-listing/contact-listing.component';
import { OfferManagementComponent } from './views/offer-management/offer-management.component';
import { CareerArtclesComponent } from './views/career-artcles/career-artcles.component';
import { CareerArticlesComponent } from './pages/content-management/career-articles/career-articles.component';
import { CareerVideosComponent } from './pages/content-management/career-videos/career-videos.component';
// import { AddArticleComponent } from './pages/content-management/add-article/add-article.component';
import { ViewArticleComponent } from './pages/content-management/view-article/view-article.component';
import { EditArticleComponent } from './pages/content-management/edit-article/edit-article.component';
import { AddVideoComponent } from './pages/content-management/add-video/add-video.component';
import { ViewVideoComponent } from './pages/content-management/view-video/view-video.component';
import { EditVideoComponent } from './pages/content-management/edit-video/edit-video.component';
import { ScheduleInterviewManagementComponent } from './views/schedule-interview-management/schedule-interview-management.component';
import { ViewInterviewComponent } from './views/view-interview/view-interview.component';
import { EditInterviewComponent } from './views/edit-interview/edit-interview.component';
//import { RecruitmentSolutionsManagementComponent } from './pages/recruitment-solutions-management/recruitment-solutions-management.component';
//import { ResumeBuilderManagementComponent } from './pages/resume-builder-management/resume-builder-management.component';
// import { VideoIntroComponent } from './pages/content-management/video-intro/video-intro.component';
// import { VideoIntro1Component } from './pages/content-management/video-intro1/video-intro1.component';
// import { VideoIntro2Component } from './pages/content-management/video-intro2/video-intro2.component';
// import { VideoIntro3Component } from './pages/content-management/video-intro3/video-intro3.component';
//import { GraduateVerificationManagementComponent } from './pages/graduate-verification-management/graduate-verification-management.component';
import { FaqsComponent } from './views/faqs/faqs.component';
import { AddFaqComponent } from './views/add-faq/add-faq.component';
import { EditFaqComponent } from './views/edit-faq/edit-faq.component';
import { ViewFaqComponent } from './views/view-faq/view-faq.component';
import { AboutUsComponent } from './pages/content-management/about-us/about-us.component';
import { HomepageManagementComponent } from './pages/homepage-management/homepage-management.component';
import { HelpManagementComponent } from './views/help-management/help-management.component';
import { ViewHelpComponent } from './views/view-help/view-help.component';
import { MessagingReportsComponent } from './views/messaging-reports/messaging-reports.component';
import { VerificationSubmissionsComponent } from './views/verification-submissions/verification-submissions.component';
import { OfferSubmissionsComponent } from './views/offer-submissions/offer-submissions.component';
import { ViewVerificationComponent } from './views/view-verification/view-verification.component';
import { ViewOfferComponent } from './views/view-offer/view-offer.component';
import { ViewReportComponent } from './pages/support-management/view-report/view-report.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TopgradserviceService } from './topgradservice.service';
//import { IndustrylistComponent } from './pages/content-management/industry-management/industrylist/industrylist.component';
//import { IndustrylistModule } from './pages/content-management/industry-management/industrylist/industrylist.module';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';
import { TermsSubHeadingsComponent } from './pages/content-management/terms-sub-headings/terms-sub-headings.component';
import { AddHeadingComponent } from './pages/content-management/add-heading/add-heading.component';
import { EditHeadingComponent } from './pages/content-management/edit-heading/edit-heading.component';
import { EditSubHeadingComponent } from './pages/content-management/edit-sub-heading/edit-sub-heading.component';
import { AddSubHeadingComponent } from './pages/content-management/add-sub-heading/add-sub-heading.component';
import { GraduateAddFaqComponent } from './pages/support-management/faq_emp-grad/graduate-add-faq/graduate-add-faq.component';
import { GraduateEditFaqComponent } from './pages/support-management/faq_emp-grad/graduate-edit-faq/graduate-edit-faq.component';
import { ReportsComponent } from './pages/support-management/reports/reports.component';
//import { ViewSubHeadingComponent } from './pages/content-management/view-sub-heading/view-sub-heading.component';

// import { GraduateFaqComponent } from './pages/support-management/faq_emp-grad/graduate-faq/graduate-faq.component';





@NgModule({
  imports: [
     BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatIconModule,
    MatDatepickerModule,
    ModalModule,
    MatCheckboxModule,
    MaterialModule,
    EditorModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatExpansionModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule,
    NgxSliderModule,
    NgxDropzoneModule,
    MatTabsModule,
    PlyrModule,
    //IndustrylistModule,
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    UserManagementComponent,
    ForgetPasswordComponent,
    ViewProfileComponent,
    //EmployersListComponent,
    //EditEmployerComponent,
    //GraduateListComponent,
    //EditGraduateComponent,
    //ViewGraduateComponent,
   // ViewEmployerComponent,
   // JobsManagementComponent,
    //sViewJobComponent,
    ReportsComponent,
    CategoriesManagementComponent,
    ViewApplicantComponent,
    HeaderSectionComponent,
    HomeOurStoryComponent,
    SomethingForEveryoneComponent,
    HowItWorkComponent,
    SuccessStorySliderComponent,
    RegisterTodayComponent,
    ViewSliderItemComponent,
    AddSliderItemComponent,
    ApplicantsManagementComponent,
    AddCategoryComponent,
    AddSubCategoryComponent,
    EditSubCategoryComponent,
    ViewSubCategoryComponent,
    EditJobComponent,
    PaymentManagementComponent,
    ViewPaymentComponent,
    SubCategoryManagementComponent,
    EditCategoryComponent,
    SubAdminManagementComponent,
    AddSubAdminComponent,
    ViewSubAdminComponent,
    EditSubAdminComponent,
    EmployerHowItWorksComponent,
    //EditEmployerHowItWorksComponent,
    GraduateHowItWorksComponent,
    //EditGraduateHowItWorksComponent,
    //PrivacyPolicyComponent,
    TermsConditionsComponent,
    ContactUsComponent,
    ContactListingComponent,
    OfferManagementComponent,
    CareerArtclesComponent,
    CareerArticlesComponent,
    CareerVideosComponent,
   // AddArticleComponent,
    ViewArticleComponent,
    EditArticleComponent,
    AddVideoComponent,
    ViewVideoComponent,
    EditVideoComponent,
    ScheduleInterviewManagementComponent,
    ViewInterviewComponent,
    EditInterviewComponent,
    //RecruitmentSolutionsManagementComponent,
    //ResumeBuilderManagementComponent,
    //VideoIntroComponent,
   // VideoIntro1Component,
    //VideoIntro2Component,
    // VideoIntro3Component,
    //GraduateVerificationManagementComponent,
    FaqsComponent,
    AddFaqComponent,

    EditFaqComponent,
    ViewFaqComponent,
    AboutUsComponent,
    GraduateAddFaqComponent,
    GraduateEditFaqComponent,
    HomepageManagementComponent,
    HelpManagementComponent,
    ViewHelpComponent,
    MessagingReportsComponent,
    VerificationSubmissionsComponent,
    OfferSubmissionsComponent,
    ViewVerificationComponent,
    ViewOfferComponent,
    ViewReportComponent,
    //IndustrylistComponent,
    ResetPasswordComponent,
    TermsSubHeadingsComponent,
    AddHeadingComponent,
    EditHeadingComponent,
    EditSubHeadingComponent,
    AddSubHeadingComponent,
    
    //GraduateListComponent,
        //  ViewSubHeadingComponent,
    // GraduateFaqComponent
    // DashboardComponent
  ],
  providers: [BsModalRef,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TopgradserviceService, multi:true
    },
    IconSetService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
