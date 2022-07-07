import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopgradserviceService } from '../../topgradservice.service';

@Component({
  selector: 'app-view-interview',
  templateUrl: './view-interview.component.html',
  styleUrls: ['./view-interview.component.scss']
})
export class ViewInterviewComponent implements OnInit {
  allData: any;
  empFirstName: any;
  empLastName: any;
  grdFirstName: any;
  grdLastName: any;
  jobTitle: any;
  interviewDate: any;
  interviewInterview_method: any;
  notes: any;
  startTime: any;
  endTime: any;
  video: any;
  meetingLink: any;
  videoPlatform: any;
  timeZone: any;
  location: any;
  phone: any;

  constructor(
    private Service: TopgradserviceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.detailInterview()
  }

  detailInterview() {
    var obj = {
      id: this.route.snapshot.paramMap.get('id')
    }
    this.Service.detailOfInterview(obj).subscribe((res: any) => {
      console.log("response of detail interview >>>>>>>", res);

      this.allData = res.data
      console.log("all data is >>>>>", this.allData);


      if (this.allData.interview.interview_method == 'face_to_face') {
        let interviewMethod = "Face To Face"
        this.allData.interview.interviewMethod = interviewMethod
      }
      else if (this.allData.interview.interview_method == 'phone') {
        let interviewMethod = "Phone"
        this.allData.interview.interviewMethod = interviewMethod
      }
      else if (this.allData.interview.interview_method == 'video') {
        let interviewMethod = "Video"
        this.allData.interview.interviewMethod = interviewMethod
      }

      this.empFirstName = this.allData.employer_detail.first_name
      this.empLastName = this.allData.employer_detail.last_name

      this.grdFirstName = this.allData.graduate_detail.first_name
      this.grdLastName = this.allData.graduate_detail.last_name

      this.jobTitle = this.allData.job_detail.job_title

      this.interviewDate = this.allData.interview.date
      this.interviewInterview_method = this.allData.interview.interviewMethod

      this.notes = this.allData.interview.notes

      this.startTime = this.allData.interview.start_time
      this.endTime = this.allData.interview.end_time

      this.meetingLink = this.allData.interview.video?.meeting_link
      this.videoPlatform = this.allData.interview.video?.video_platform

      this.location = this.allData.interview.location?.name

      this.phone=this.allData.interview.phone









    })
  }

}
