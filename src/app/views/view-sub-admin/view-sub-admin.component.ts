import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { TopgradserviceService } from '../../topgradservice.service';



@Component({
  selector: 'app-view-sub-admin',
  templateUrl: './view-sub-admin.component.html',
  styleUrls: ['./view-sub-admin.component.scss']
})
export class ViewSubAdminComponent {
  allData: any;
  last_name: any;
  first_name: any;
  email: any;
  phone_no: any;
  status: any;
  image: any;


  constructor(
    private Service: TopgradserviceService,
    private route: ActivatedRoute,
  ) { }

  

  ngOnInit(): void {
    this.detailSubAdminData()
  }

  detailSubAdminData() {
    var obj = {
      id: this.route.snapshot.paramMap.get('id')
    }
    console.log("object>>>>",obj);
    
    this.Service.detailSubAdmin(obj).subscribe((res: any) => {
      console.log("response of detail Sub admin >>>>>>>", res);

      this.allData=res.data
      console.log("all data >>>",this.allData);

      this.image=this.allData.image
      this.first_name=this.allData.first_name
      this.last_name=this.allData.last_name
      this.email=this.allData.email
      this.phone_no=this.allData.phone_no
      this.status=this.allData.status
    })
  }

}
