import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  {
    name: 'User Management',
    url: '/dashboard',
    icon: 'icon-user',
    children: [
      {
       name: 'Employer',
        url: '/employersList',
        icon: 'icon-star'
      },
      {
       name: 'Graduate',
        url: '/graduateList',
        icon: 'icon-star'
      },
    ]
  },
  {
    name: 'Sub-admin Management',
    url: '/subAdminManagement',
    icon: 'icon-user'
  },
  {
    name: 'Access Priviledge Management',
    url: '/dashboard',
    icon: 'icon-badge'
  },
  {
    name: 'Jobs Management',
    url: '/jobsManagement',
    icon: 'icon-user'
  },
  {
    name: 'Categories Management',
    url: '/categoriesManagement',
    icon: 'icon-layers'
  },
  {
    name: 'Payment Management',
    url: '/paymentManagement',
    icon: 'icon-calculator'
  },
  {
    name: 'Interview Management',
    url: '/schedule-interview-management',
    icon: 'icon-user'
  },
  {
    name: 'Recruitment Solutions Management',
    url: '/recruitment-solutions-management',
    icon: 'icon-user'
  },
  {
    name: 'Resume Builder Management',
    url: '/resume-builder-management',
    icon: 'icon-user'
  },
  {
    name: 'Content Management',
    url: '/dashboard',
    icon: 'icon-pie-chart',
    children: [
      {
        name: 'Home Page Management',
        url: '/homePageManagement',
        icon: 'icon-home',
        // children: [
        //   {
        //    name: 'Header Section',
        //     url: '/headerSection',
        //     icon: 'icon-star'
        //   },
        //   {
        //    name: 'Our Story Section',
        //     url: '/homeOurStory',
        //     icon: 'icon-star'
        //   },
        //   {
        //    name: 'Something for everyone',
        //     url: '/somethingForEveryone',
        //     icon: 'icon-star'
        //   },
        //   {
        //    name: 'How it Work',
        //     url: '/howItWork',
        //     icon: 'icon-star'
        //   },
        //   {
        //    name: 'Success Story',
        //     url: '/successStorySlider',
        //     icon: 'icon-star'
        //   },
        //   {
        //    name: 'Register Today',
        //     url: '/registerToday',
        //     icon: 'icon-star'
        //   },
        // ]
      },
      {
        name: 'Industry Management',
        url: '/industryManagement',
        icon: 'icon-star', 
      },
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
      },
      {
        name: 'Career Resources',
        icon: 'icon-calculator',
        children: [
          {
           name: 'Articles',
            url: '/career-articles',
            icon: 'icon-star'
          },
          {
           name: 'Videos',
            url: '/career-videos',
            icon: 'icon-star'
          },
        ]
      },
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
      },
      {
        name: 'Terms & Conditions',
        url: '/terms-conditions',
        icon: 'icon-list',
      },
      {
        name: 'Privacy Policy',
        url: '/privacy-policy',
        icon: 'icon-lock',
      },
      {
        name: 'About Us',
        url: '/about-us',
        icon: 'icon-info',
      },
    ]
  },
  {
    name: 'Support Management',
    url: '/offer-management',
    icon: 'icon-support',
    children: [
      {
        name: 'Contact Us',
        url: '/contact-listing',
        icon: 'icon-phone',
      },
      {
        name: 'FAQs',
        url: '/faqs',
        icon: 'icon-question',
        children:[
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
        },
      {
        name: 'Help Management',
        url: '/help-management',
        icon: 'icon-question',
      },
    ]
  },
  {
    name: 'Logs',
    url: '/',
    icon: 'icon-support',
    children: [
      {
        name: 'Reports',
        url: '/reports',
        icon: 'icon-report',
      },
      {
        name: 'Verification Submissions',
        url: '/verification-submissions',
        icon: 'icon-phone',
      },
      {
        name: 'Offer Submissions',
        url: '/offer-submissions',
        icon: 'icon-phone',
      },
    ]
  },
  {
    name: 'Offer Management',
    url: '/offer-management',
    icon: 'icon-user'
  },
  {
    name: 'Graduate Verification Management',
    url: '/graduate-verification-management',
    icon: 'icon-user'
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
];
