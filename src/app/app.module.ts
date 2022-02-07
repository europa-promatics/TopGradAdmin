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

// import { DashboardComponent } from './views/dashboard/dashboard.component';

import { UserManagementComponent } from './views/user-management/user-management.component';
import { ForgetPasswordComponent } from './pages/auth/forget-password/forget-password.component';
import { ViewProfileComponent } from './views/view-profile/view-profile.component';
import { EmployersListComponent } from './views/employers-list/employers-list.component';
import { EditEmployerComponent } from './views/edit-employer/edit-employer.component';
import { GraduateListComponent } from './views/graduate-list/graduate-list.component';
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
import { PrivacyPolicyComponent } from './views/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './views/terms-conditions/terms-conditions.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { ContactListingComponent } from './views/contact-listing/contact-listing.component';
import { OfferManagementComponent } from './views/offer-management/offer-management.component';
import { CareerArtclesComponent } from './views/career-artcles/career-artcles.component';
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
import { RecruitmentSolutionsManagementComponent } from './views/recruitment-solutions-management/recruitment-solutions-management.component';
import { ResumeBuilderManagementComponent } from './views/resume-builder-management/resume-builder-management.component';
import { VideoIntroComponent } from './views/video-intro/video-intro.component';
import { VideoIntro1Component } from './views/video-intro1/video-intro1.component';
import { VideoIntro2Component } from './views/video-intro2/video-intro2.component';
import { VideoIntro3Component } from './views/video-intro3/video-intro3.component';
import { GraduateVerificationManagementComponent } from './views/graduate-verification-management/graduate-verification-management.component';
import { FaqsComponent } from './views/faqs/faqs.component';
import { AddFaqComponent } from './views/add-faq/add-faq.component';
import { EditFaqComponent } from './views/edit-faq/edit-faq.component';
import { ViewFaqComponent } from './views/view-faq/view-faq.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { HomepageManagementComponent } from './views/homepage-management/homepage-management.component';
import { HelpManagementComponent } from './views/help-management/help-management.component';
import { ViewHelpComponent } from './views/view-help/view-help.component';
import { MessagingReportsComponent } from './views/messaging-reports/messaging-reports.component';
import { VerificationSubmissionsComponent } from './views/verification-submissions/verification-submissions.component';
import { OfferSubmissionsComponent } from './views/offer-submissions/offer-submissions.component';
import { ViewVerificationComponent } from './views/view-verification/view-verification.component';
import { ViewOfferComponent } from './views/view-offer/view-offer.component';
import { ViewReportComponent } from './views/view-report/view-report.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TopgradserviceService } from './topgradservice.service';
import { IndustrylistComponent } from './pages/content-management/industry-management/industrylist/industrylist.component';
import { IndustrylistModule } from './pages/content-management/industry-management/industrylist/industrylist.module';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';



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
    IndustrylistModule,

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
    EmployersListComponent,
    EditEmployerComponent,
    GraduateListComponent,
    EditGraduateComponent,
    ViewGraduateComponent,
    ViewEmployerComponent,
    JobsManagementComponent,
    ViewJobComponent,
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
    EditEmployerHowItWorksComponent,
    GraduateHowItWorksComponent,
    EditGraduateHowItWorksComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    ContactUsComponent,
    ContactListingComponent,
    OfferManagementComponent,
    CareerArtclesComponent,
    CareerArticlesComponent,
    CareerVideosComponent,
    AddArticleComponent,
    ViewArticleComponent,
    EditArticleComponent,
    AddVideoComponent,
    ViewVideoComponent,
    EditVideoComponent,
    ScheduleInterviewManagementComponent,
    ViewInterviewComponent,
    EditInterviewComponent,
    RecruitmentSolutionsManagementComponent,
    ResumeBuilderManagementComponent,
    VideoIntroComponent,
    VideoIntro1Component,
    VideoIntro2Component,
    VideoIntro3Component,
    GraduateVerificationManagementComponent,
    FaqsComponent,
    AddFaqComponent,
    EditFaqComponent,
    ViewFaqComponent,
    AboutUsComponent,
    HomepageManagementComponent,
    HelpManagementComponent,
    ViewHelpComponent,
    MessagingReportsComponent,
    VerificationSubmissionsComponent,
    OfferSubmissionsComponent,
    ViewVerificationComponent,
    ViewOfferComponent,
    ViewReportComponent,
    IndustrylistComponent,
    ResetPasswordComponent,
    // DashboardComponent
  ],
  providers: [
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
