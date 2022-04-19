import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Connection, User } from './amazon-demo-container/user';
import {Md5} from 'ts-md5/dist/md5';
import { DeviceDetectorService } from 'ngx-device-detector';
import FingerprintJS from '@fingerprintjs/fingerprintjs-pro'

@Injectable({ providedIn: 'root' })
export class UserService {
  userType: string = "type1";
  user!: User;
  constructor(    private http: HttpClient, private deviceDectector: DeviceDetectorService
    ) {
    this.user = new User();
    this.user.cookieEnabled = navigator.cookieEnabled;
    this.user.doNotTrack = navigator.doNotTrack;
    this.user.platform = navigator.platform;
    this.user.referrer = document.referrer;
    this.user.userAgent = navigator.userAgent.substring(0, 40);
    this.user.language = navigator.language;
    this.user.onLine = navigator.onLine;
    this.user.vendor=navigator.vendor;
    this.user.javaEnabled=  navigator.javaEnabled();

var device = this.deviceDectector.getDeviceInfo()
this.user.browser=device.browser;
this.user.browser_version=device.browser_version;
this.user.device=device.device;
this.user.deviceType=device.deviceType;
this.user.orientation=device.orientation;
this.user.os=device.os;
this.user.os_version=device.os_version;
this.user.isDesktop=this.deviceDectector.isDesktop();
this.user.isPhone=this.deviceDectector.isMobile();
this.user.isTablet =this.deviceDectector.isTablet()
// Initialize an agent at application startup.
const fpPromise = FingerprintJS.load({
  apiKey: '0h5G0ShSmP6LakGkdn6E'
})

// Get the visitor identifier when you need it.
fpPromise
  .then(fp => fp.get({  extendedResult: true
  }))
  .then(result => 
    {
      this.user.id= result.visitorId;
      this.user.requestId=result.requestId;
      this.user.visitorFound=result.visitorFound;
    }
    );



    let self=this;
    this.getGeoLocations().subscribe((data: any)=>{
      self.user.ipAddress=data.ip;
      self.user.city=data.city;
      self.user.country=data.country;
      self.user.postal=data.postal;
      self.user.region=data.region;
      self.user.timezone=data.timezone;
      self.user.location=data.loc;

      //const md5=new Md5();
      //this.user.id= md5.appendStr(self.user.ipAddress+ self.user.language).end().toString();

    })

  }
  getGeoLocations(){
    return this.http
    .get('https://ipinfo.io?token=9ef64f8b6a6ff6')
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
    return 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
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
    let date= new Date();
    this.user.time =  date.toUTCString();
  }
  setUserType(userType: string) {
    this.userType = userType;
  }
}
