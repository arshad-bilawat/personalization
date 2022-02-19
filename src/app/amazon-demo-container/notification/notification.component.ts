import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SignalRService } from 'src/app/signalr.servce';
import { User } from '../user';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  
  constructor(public signalRService: SignalRService, private ref: ChangeDetectorRef) { }
  public notifications:any= [];
  ngOnInit(): void {
   
    this.signalRService.startConnection();
    this.signalRService.addActivityListerner();
    let self=this;
    this.signalRService.notificationAdded.subscribe((user)=>{
      self.notifications.push(user);
      self.ref.detectChanges();
    })
  }

}
