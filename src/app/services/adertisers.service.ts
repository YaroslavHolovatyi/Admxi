import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdertisersService {

  constructor(private http: HttpClient) { }

  userID = {"userId" : 283}
  advertiserItem: any;

  searchForAdvertisers(): Observable<any> {
    const getUsersUrl:string = "http://localhost:3000/api";
    return this.http.post(getUsersUrl, this.userID)
  }

  saveChangedAdvertiser(advertiser:any){
    const getUsersUrl:string = "http://localhost:3000/save";
    return this.http.post(getUsersUrl, advertiser)
  }
}
