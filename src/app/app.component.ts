import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Admixer';

  pageName: string = 'Home';
  

  constructor(private router: Router){}

  ngOnInit(){
    this.router.events.pipe(
      filter(event=>event instanceof NavigationEnd)
    ).subscribe(()=>{
      this.pageName = this.getActiveRoute();
    })
  }

  getActiveRoute(): string{
    let route = this.router.routerState.root;
    while (route.firstChild){
      route = route.firstChild;
    }
    return route.snapshot.data['title'] || '';
  }


}
