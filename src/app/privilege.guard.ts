import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TopgradserviceService } from './topgradservice.service';


@Injectable({
    providedIn: 'root'
})
export class PrivilegeGuard implements CanActivate {
    admin_type: any;

    constructor(
        private service: TopgradserviceService,
        private router: Router
    ) {
        // this.getAdminProfile();
     }


//   getAdminProfile(){
//     this.service.getAdminProfile().subscribe((res)=>{
//       this.admin_type = res.data?.admin_type;
      
//     })
//   }


    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let bool = true
        // this.service.getSubAdminDetail().subscribe(res => {
    

            
        // })
        return true
    }
}
