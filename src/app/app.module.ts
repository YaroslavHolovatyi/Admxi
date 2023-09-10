import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//modules
import { MaterialModule } from './material.module';
import { SidebarComponent } from './organism/sidebar/sidebar.component';
import { HomeComponent } from './organism/home/home.component';
import { AdvertisersComponent } from './organism/advertisers/advertisers.component';
import { AppRouterModule } from './router.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditAdvertiserComponent } from './organism/edit-advertiser/edit-advertiser.component';
import { DialogComponent } from './organism/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    AdvertisersComponent,
    EditAdvertiserComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
