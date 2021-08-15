import { Component } from '@angular/core';
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
    public userService: UserService) { }
    

    setUserType(e: any){
      this.userService.setUserType(e.target.value);
      this.messageService.add('selected user type : '+e.target.value);
    }
    
  ngAfterViewInit(){
    $('.links').on('click', function(e){
      console.log(e.target.innerText + " " + e.target + " " + e.timeStamp);
    });   

    $('button').on('click',function(e){
    }); 
  }
}
