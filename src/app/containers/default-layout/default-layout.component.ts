import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import {  Router, RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  image: any;

  constructor(private router: Router){
    
  }
  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  
  ngOnInit() {
    console.log('Called ngOnInit method');
    this.image= localStorage.getItem('image');
    }

  logout(){
     localStorage.clear();
     this.router.navigate(['login']);
  }
}
