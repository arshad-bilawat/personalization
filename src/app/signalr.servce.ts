
import { EventEmitter, Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";  // or from "@microsoft/signalr" if you are using a new library
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
    constructor(private userService: UserService){

    }

private hubConnection: signalR.HubConnection | undefined
    notificationAdded = new EventEmitter();

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl('https://signalr20220218034258.azurewebsites.net/activityHub')
                            .withAutomaticReconnect()
                            .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addActivityListerner = () => {
      if(this.hubConnection){
        this.hubConnection.on('ReceiveMessage', (data) => {
            let notification = JSON.parse(data);
            this.notificationAdded.emit(notification);
          });
        }
      } 
      
      /**
     * activityHandler
     */
    public activityHandler=(action: string, description: string, nodeName: string, title: string, url: string)=>{
        if(this.hubConnection){
            this.userService.setUserAction(action,description,nodeName,title,url);
            let message=JSON.stringify(this.userService.user);
            this.hubConnection.invoke('SendMessage', message).catch((err)=>{
                  console.error(err);
              });
            }
          }    
    }

    