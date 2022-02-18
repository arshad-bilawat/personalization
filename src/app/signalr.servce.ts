
import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";  // or from "@microsoft/signalr" if you are using a new library

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

private hubConnection: signalR.HubConnection | undefined

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
            console.log(data);
          });
        }
      } 
      
      /**
     * activityHandler
     */
    public activityHandler=(action: string)=>{
        if(this.hubConnection){
            this.hubConnection.invoke('SendMessage', action).catch((err)=>{
                  console.error(err);
              });
            }
          }    
    
    }

    