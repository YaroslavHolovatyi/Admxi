import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './organism/home/home.component';
import { AdvertisersComponent } from './organism/advertisers/advertisers.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent, data:{title: "Home"} },
  { path: 'Advertisers', component: AdvertisersComponent, data:{title: "Advertisers"} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
