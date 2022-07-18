import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlyrComponent } from 'ngx-plyr';
import { TopgradserviceService } from '../../topgradservice.service';

@Component({
  selector: 'app-view-verification',
  templateUrl: './view-verification.component.html',
  styleUrls: ['./view-verification.component.scss']
})
export class ViewVerificationComponent implements OnInit {

	@ViewChild(PlyrComponent)

  plyr: PlyrComponent;

  // or get it from plyrInit event
  player: Plyr;

  videoSources: Plyr.Source[] = [
    {
      src: 'bTqVqk7FSmY',
      provider: 'youtube',
    },
  ];
  allData: any;
  references_1: any;
  references_2: any;
  company_1: any;
  contact_number_1: any;
  email_1: any;
  relationship_1: any;
  name_1: any;
  company_2: any;
  contact_number_2: any;
  email_2: any;
  name_2: any;
  relationship_2: any;
  video: any;
  date: any;
  academicTranscripts: any;
  nationalPolice: any;
  englishLanguage: any;
  proofWork: any;
  firstName: any;
  lastName: any;
  email: any;

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }

  play(): void {
    this.player.play(); // or this.plyr.player.play()
  }

  stop(): void {
    this.player.stop(); // or this.plyr.player.play()
  }

  constructor(private Service: TopgradserviceService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.detailVerification()
  }

  detailVerification(){
    var obj={
      submission_id:this.route.snapshot.paramMap.get('id')
    }
    this.Service.detailVerificationSubmission(obj).subscribe((res:any)=>{
      console.log("response of detail verification submission",res);
      this.allData=res.data
      console.log("all data is >>>>",this.allData);

      this.firstName=this.allData.graduate_id.first_name
      this.lastName=this.allData.graduate_id.last_name
      this.email=this.allData.graduate_id.email

      this.references_1=this.allData.references[0]
      this.company_1=this.references_1.company
      this.contact_number_1=this.references_1.contact_number
      this.email_1=this.references_1.email
      this.name_1=this.references_1.name
      this.relationship_1=this.references_1.relationship

      this.references_2=this.allData.references[1]
      this.company_2=this.references_2.company
      this.contact_number_2=this.references_2.contact_number
      this.email_2=this.references_2.email
      this.name_2=this.references_2.name
      this.relationship_2=this.references_2.relationship

      this.video=this.allData.video_resume.video_resume.url

      this.date=this.allData.createdAt

      this.academicTranscripts=this.allData.upload_documents[0]?.document
      this.nationalPolice=this.allData.upload_documents[1]?.document
      this.englishLanguage=this.allData.upload_documents[2]?.document
      this.proofWork=this.allData.upload_documents[3]?.document




            
      

    })
  }

}
