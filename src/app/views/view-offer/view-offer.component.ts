import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopgradserviceService } from '../../topgradservice.service';

@Component({
  selector: 'app-view-offer',
  templateUrl: './view-offer.component.html',
  styleUrls: ['./view-offer.component.scss']
})
export class ViewOfferComponent implements OnInit {
  allOfferSubmissionData: any;
  candidateFirstName: any;
  candidateLasstName: any;
  candidateEmail: any;
  empFirstName: any;
  empLasstName: any;
  empEmail: any;
  jobtitle: any;
  companyName: any;
  date: any;
  status: any;

  constructor(
    private Service: TopgradserviceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.detailOfferSubmission()
  }

  detailOfferSubmission() {
    var obj = {
      id: this.route.snapshot.paramMap.get('id')
    }
    this.Service.detailOfOfferSubmission(obj).subscribe((res: any) => {
      console.log("response of detail Offer Submission >>>>>>>", res);

      this.allOfferSubmissionData = res.data
      console.log("all data is >>>>>", this.allOfferSubmissionData);

      this.candidateFirstName=this.allOfferSubmissionData.graduate_detail.first_name
      this.candidateLasstName=this.allOfferSubmissionData.graduate_detail.last_name
      this.candidateEmail=this.allOfferSubmissionData.graduate_detail.email

      this.empFirstName=this.allOfferSubmissionData.employer_detail.first_name
      this.empLasstName=this.allOfferSubmissionData.employer_detail.last_name
      this.empEmail=this.allOfferSubmissionData.employer_detail.email

      this.jobtitle=this.allOfferSubmissionData.job_detail.job_title
      this.companyName=this.allOfferSubmissionData.job_detail.company_name

      this.date=this.allOfferSubmissionData.application_status.date
      this.status=this.allOfferSubmissionData.application_status.status

    })
  }

}
