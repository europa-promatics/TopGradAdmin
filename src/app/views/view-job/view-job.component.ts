import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { TopgradserviceService } from '../../topgradservice.service';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.scss']
})
export class ViewJobComponent implements OnInit {
  user: any;
  toastr: any;
  deadline_date: any;
  expected_start_date: any;
  diffInDays: number;
  firstDate: any;
  secondDate: any;
  datePipeString: string;
  Difference_In_Time: number;
  Difference_In_Days: number;
  diffInDays2: number;
  date: number;


  constructor(private route: ActivatedRoute, private Service: TopgradserviceService) {

  }

  ngOnInit(): void {
    this.jobDetail()
  }

  jobDetail() {
    var obj = {
      employer_job_id: this.route.snapshot.paramMap.get('id')
    }
    console.log("onnnn", obj)
    this.Service.jobManagementDetail(obj).subscribe(data => {
      console.log("main data for users is ssssssssssssssssssss====", data)
      this.user = data.data


      if (this.user.contract_type == 'temp_contract') {
        let cType = "Temp/Contract"
        this.user.cType = cType
      }
      else if (this.user.contract_type == 'full_time') {
        let cType = 'Full Time'
        this.user.cType = cType
      }
      else if (this.user.contract_type == 'part_time') {
        let cType = 'Part Time'
        this.user.cType = cType
      }
      else if (this.user.contract_type == 'casual') {
        let cType = 'Casual'
        this.user.cType = cType
      }


      //  * current date and next date-----

      let current_date = moment()
      let last_date = moment(this.user.deadline_date)
      this.date=last_date.diff(current_date, 'days')

      // // * Posted---------
      this.firstDate = moment(this.user?.deadline_date);
      this.secondDate = moment(this.user?.createdAt);
      this.diffInDays2 = Math.abs(this.firstDate?.diff(this.secondDate, 'days'));

    }, err => {
      console.log(err.status)
      if (err.status >= 404) {
        console.log('Some error occured')
      } else {
        this.toastr.error('Some error occured, please try again!!', 'Error')
        console.log('Internet Connection Error')
      }
    })
  }


}

