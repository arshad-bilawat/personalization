import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    if(this.messages.length==3){
      this.messages=[];
      this.messages.push(message);

    }
    else{
      this.messages.push(message);
    }
  }

  clear() {
    this.messages = [];
  }
}
