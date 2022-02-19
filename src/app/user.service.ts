import { Injectable } from '@angular/core';
import { User } from './amazon-demo-container/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  userType: string = "type1";
  user!: User;
  constructor(){
    this.user=new User();
    this.user.cookieEnabled=navigator.cookieEnabled;
    this.user.doNotTrack = navigator.doNotTrack;
    this.user.platform = navigator.platform;
    this.user.referrer = document.referrer;
this.user.userAgent=navigator.userAgent.substring(0,50);
this.user.language=navigator.language;

  }

  setUserId(id: string){

  }

  setUserCountry(country: string){

  }
  setUserBandWidth(bandwidth: string){

  }

  setUserAction(action: string, description: string, nodeName: string, title: string, url: string){
    this.user.action=action;
    this.user.description= description;
    this.user.nodeName=nodeName;
    this.user.url=url;
    this.user.title =title;
  }
  setUserType(userType: string) {
    this.userType = userType;
  }
}
