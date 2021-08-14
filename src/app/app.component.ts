import { Component } from '@angular/core';
import * as $ from 'jquery';
import { MessageService } from './message.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  constructor(
    private messageService: MessageService) { }
  ngAfterViewInit(){
    $('.links').on('click', function(e){
      console.log(e.target.innerText + " " + e.target + " " + e.timeStamp);
    });   

    $('button').on('click',function(e){
    }); 
  }
}
