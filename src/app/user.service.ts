import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  userType: string = "type1";

  setUserType(userType: string) {
    this.userType = userType;
  }
}
