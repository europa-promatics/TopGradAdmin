import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TopgradserviceService } from '../../../../topgradservice.service';

@Component({
  selector: 'app-view-faq',
  templateUrl: './view-faq.component.html',
  styleUrls: ['./view-faq.component.scss']
})
export class ViewFaqComponent implements OnInit {
  user
  toastr: any;
  inputTitle: FormGroup;

  constructor(private route:ActivatedRoute,private Service:TopgradserviceService) {

   }

  ngOnInit(): void {
    this.faq_id()
  }

  faq_id(){
      var obj = {
        faq_id:this.route.snapshot.paramMap.get('id')
        }
      console.log("onnnn", obj)
      this.Service.faqDetail(obj).subscribe(data => {
            console.log("main data for users is ssssssssssssssssssss====", data)
            this.user=data.data
            
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
