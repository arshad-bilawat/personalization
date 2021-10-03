import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amazon-demo',
  templateUrl: './amazon-demo.component.html',
  styleUrls: ['./amazon-demo.component.css']
})
export class AmazonDemoComponent implements OnInit {

  constructor() { }
public type: number=2;
  ngOnInit(): void {
    if(window.navigator.userAgent.indexOf('Edg')>0){
      this.type=2;
    }
    else{
      this.type=1;
    }
  }

}
