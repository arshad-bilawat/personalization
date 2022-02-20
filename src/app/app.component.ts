import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { MessageService } from './message.service';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  userType='type1';
  constructor(
    private messageService: MessageService,
    public userService: UserService,
    private router: Router) { }
    

    setUserType(e: any){
      this.userService.setUserType(e.target.value);
      this.messageService.add('selected user type : '+e.target.value);
      this.router.navigate(['/dashboard']);
    }
    
}
