import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './amazon-demo-container/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  userType: string = "type1";
  user!: User;
  constructor(    private http: HttpClient
    ) {
    this.user = new User();
    this.user.id = this.newGuid();
    this.user.cookieEnabled = navigator.cookieEnabled;
    this.user.doNotTrack = navigator.doNotTrack;
    this.user.platform = navigator.platform;
    this.user.referrer = document.referrer;
    this.user.userAgent = navigator.userAgent.substring(0, 50);
    this.user.language = navigator.language;
    let date= new Date();
    this.user.time =  date.toUTCString();
    let self=this;
    this.getGeoLocations().subscribe((data: any)=>{
      self.user.ipAddress=data.ip;
    })

  }
  getGeoLocations(){
    return this.http
    .get('https://api.ipify.org/?format=json')
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }


  setUserId(id: string) {

  }

  setUserCountry(country: string) {

  }
  setUserBandWidth(bandwidth: string) {

  }

  setUserAction(action: string, description: string, nodeName: string, title: string, url: string) {
    this.user.action = action;
    this.user.description = description;
    this.user.nodeName = nodeName;
    this.user.url = url;
    this.user.title = title;
  }
  setUserType(userType: string) {
    this.userType = userType;
  }
}
