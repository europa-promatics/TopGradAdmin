import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TopgradserviceService } from '../../topgradservice.service';

@Component({
  selector: 'app-view-help',
  templateUrl: './view-help.component.html',
  styleUrls: ['./view-help.component.scss']
})
export class ViewHelpComponent implements OnInit {

  user
  toastr: any;
  viewHelp: FormGroup;

  constructor(private route:ActivatedRoute,private Service:TopgradserviceService) {

   }

  ngOnInit(): void {
    this.support_id()
  }
  support_id(){
  
    var obj = {
 
       //  limit: this.searchFilters.limit,
       support_id:this.route.snapshot.paramMap.get('id')
 
      }
     console.log("onnnn", obj)
     this.Service.contactDetail(obj).subscribe(data => {
           console.log("main data for users is ssssssssssssssssssss====", data)
          //  this.productslist = data.products
          //  this.length = data.total_counts
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
