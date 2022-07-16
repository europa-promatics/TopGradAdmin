import { Component } from '@angular/core';
import { navItems } from '../../_nav';
import { Router, RouterStateSnapshot } from '@angular/router';
import { TopgradserviceService } from '../../topgradservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  image: any;
  id: string;
  allData: any;
  graduates: any;
  type: any;
  mainType: string;

  public sidebarMinimized = false;
  navItems: any[] = [];
  job_management: any;
  payment_management: any;
  general_management: any;
  // public navItems = navItems;

  constructor(private router: Router, private Service: TopgradserviceService) {
    this.mainType = localStorage.getItem('admin_data');
    this.id = localStorage.getItem('_id')

    if (this.mainType == "admin") {
      this.navItems = navItems
    }
    else if (this.mainType == "sub_admin") {
      this.navItems.push({
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
      })

      let bars = JSON.parse(localStorage['allowedBars'])

      if (bars.job_management.approve || bars.job_management.delete || bars.job_management.edit) {
        this.navItems.push(
          {
            name: 'Jobs Management',
            url: '/jobsManagement',
            icon: 'icon-user'
          })
      }

      if (bars.payment_management.delete || bars.payment_management.invoices || bars.payment_management.view) {
        this.navItems.push(
          {
            name: 'Payment Management',
            url: '/paymentManagement',
            icon: 'icon-calculator'
          })
      }

      if (bars.user_management.employers || bars.user_management.graduates) {
        this.navItems.push(
          {
            name: 'User Management',
            url: '/dashboard',
            icon: 'icon-user',
            children: [bars.user_management.employers ?
              {
                name: 'Employer',
                url: '/employersList',
                icon: 'icon-star'
              } : "",
            bars.user_management.graduates ?
              {
                name: 'Graduate',
                url: '/graduateList',
                icon: 'icon-star'
              } : "",
            ]
          })
      }
      if (bars.graduate_verification_management.add || bars.graduate_verification_management.delete || bars.graduate_verification_management.edit) {
        this.navItems.push(
          {
            name: 'Graduate Verification Management',
            url: '/graduate-verification-management',
            icon: 'icon-user'
          })
      }
      if (bars.interview_management.delete || bars.interview_management.add || bars.interview_management.edit) {
        this.navItems.push(
          {
            name: 'Interview Management',
            url: '/schedule-interview-management',
            icon: 'icon-user'
          })
      }
      if (bars.logs.offer_submission || bars.logs.reports || bars.logs.verifications_submission) {
        this.navItems.push(
          {
            name: 'Logs',
            url: '/',
            icon: 'icon-support',
            children: [bars.logs.reports ?
              {
                name: 'Reports',
                url: '/job-applicants-reports',
                icon: 'icon-report',
              } : "",
            bars.logs.verifications_submission ?
              {
                name: 'Verification Submissions',
                url: '/verification-submissions',
                icon: 'icon-phone',
              } : "",
            bars.logs.offer_submission ?
              {
                name: 'Offer Submissions',
                url: '/offer-submissions',
                icon: 'icon-phone',
              } : "",
            ]
          })
      }
      if (bars.page.error_404 || bars.page.error_500 || bars.page.login) {
        this.navItems.push(
          {
            name: 'Pages',
            url: '/pages',
            icon: 'icon-star',
            children: [bars.page.login ?
              {
                name: 'Login',
                url: '/login',
                icon: 'icon-star'
              } : "",
            bars.page.error_404 ?
              {
                name: 'Error 404',
                url: '/404',
                icon: 'icon-star'
              } : "",
            bars.page.error_500 ?
              {
                name: 'Error 500',
                url: '/500',
                icon: 'icon-star'
              } : ""
            ]
          })
      }
      if (bars.recruitment_solution_management.add || bars.recruitment_solution_management.delete || bars.recruitment_solution_management.edit) {
        this.navItems.push(
          {
            name: 'Recruitment Solutions Management',
            url: '/recruitment-solutions-management',
            icon: 'icon-user'
          })
      }
      if (bars.resume_builder_management.delete || bars.resume_builder_management.add || bars.resume_builder_management.edit) {
        this.navItems.push(
          {
            name: 'Resume Builder Management',
            url: '/resume-builder-management',
            icon: 'icon-user'
          })
      }

      if (bars.skill_list.add || bars.skill_list.delete || bars.skill_list.edit) {
        this.navItems.push(
          {
            name: 'Skills List',
            url: '/skills-list',
            icon: 'icon-user'
          })
      }
      if (bars.support_management.contact_us || bars.support_management.help_management || bars.support_management.faqs) {
        this.navItems.push(
          {
            name: 'Support Management',
            url: '/offer-management',
            icon: 'icon-support',
            children: [
              bars.support_management.contact_us ? {
                name: 'Contact Us',
                url: '/contact-listing',
                icon: 'icon-phone',
              } : "",
              bars.support_management.faqs ?
                {
                  name: 'FAQs',
                  url: '/faqs',
                  icon: 'icon-question',
                  children: [
                    {
                      name: 'Employer',
                      url: '/employersFaq',
                      icon: 'icon-star'
                    },
                    {
                      name: 'Graduate',
                      url: '/graduateFaq',
                      icon: 'icon-star'
                    },
                  ]
                } : "",
              bars.support_management.help_management ?
                {
                  name: 'Help Management',
                  url: '/help-management',
                  icon: 'icon-question',
                } : "",
            ]
          }
        )
      }
      if (bars.content_management.about_us || bars.content_management.how_it_works_management || bars.content_management.terms_and_conditions ||
        bars.content_management.career_resources || bars.content_management.industry_management || bars.content_management.video_resume_tips_management ||
        bars.content_management.home_page_management || bars.content_management.privacy_policy) {
        this.navItems.push(
          {
            name: 'Content Management',
            url: '/dashboard',
            icon: 'icon-pie-chart',
            children: [
              bars.content_management.home_page_management ?
                {
                  name: 'Home Page Management',
                  url: '/homePageManagement',
                  icon: 'icon-home',
                } : "",
              bars.content_management.industry_management ?
                {
                  name: 'Industry Management',
                  icon: 'icon-star',
                  children: [
                    {
                      name: 'Employer Industry Management',
                      url: '/employerIndustryManagement',
                      icon: 'icon-star'
                    },
                    {
                      name: 'Graduate Industry Management',
                      url: '/graduateIndustryManagement',
                      icon: 'icon-star'
                    },
                  ]
                } : "",
              bars.content_management.how_it_works_management ?
                {
                  name: 'How it Works Management',
                  icon: 'icon-settings',
                  children: [
                    {
                      name: 'Employer How it Works',
                      url: '/editEmployerHowItWorks',
                      icon: 'icon-star'
                    },
                    {
                      name: 'Graduate How it Works',
                      url: '/editGraduateHowItWorks',
                      icon: 'icon-star'
                    },
                  ]
                } : "",
              bars.content_management.career_resources ?
                {
                  name: 'Career Resources',
                  icon: 'icon-calculator',
                  children: [
                    {
                      name: 'Articles',
                      url: '/career-article',
                      icon: 'icon-star'
                    },
                    {
                      name: 'Videos',
                      url: '/career-videos',
                      icon: 'icon-star'
                    },
                  ]
                } : "",
              bars.content_management.video_resume_tips_management ?
                {
                  name: 'Video Resume Tips Management',
                  icon: 'icon-settings',
                  children: [
                    {
                      name: 'Video Intro',
                      url: '/videoIntro',
                      icon: 'icon-star'
                    },
                    {
                      name: 'Video Intro 1',
                      url: '/videoIntro1',
                      icon: 'icon-star'
                    },
                    {
                      name: 'Video Intro 2',
                      url: '/videoIntro2',
                      icon: 'icon-star'
                    },
                    {
                      name: 'Video Intro 3',
                      url: '/videoIntro3',
                      icon: 'icon-star'
                    },
                  ]
                } : "",
              bars.content_management.terms_and_conditions ?
                {
                  name: 'Terms & Conditions',
                  url: '/terms-conditions',
                  icon: 'icon-list',
                } : "",
              bars.content_management.privacy_policy ?
                {
                  name: 'Privacy Policy',
                  url: '/privacy-policy',
                  icon: 'icon-lock',
                } : "",
              bars.content_management.about_us ?
                {
                  name: 'About Us',
                  url: '/about-us',
                  icon: 'icon-info',
                } : "",
            ]
          })
      }
    }
  }



  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  ngOnInit() {
    console.log('Called ngOnInit method');
    this.image = localStorage.getItem('image');
    this.id = localStorage.getItem('_id')

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }


}
