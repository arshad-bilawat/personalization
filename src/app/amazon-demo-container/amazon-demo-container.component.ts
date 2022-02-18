import { Component, OnInit, ViewChild, ViewContainerRef, Directive, ComponentFactoryResolver } from '@angular/core';
import { DemoHostDirective } from './demo-host.directive';
import { DemoComponentAComponent } from './demo-component-a/demo-component-a.component';
import { DemoComponentBComponent } from './demo-component-b/demo-component-b.component';
import { DemoComponentCComponent } from './demo-component-c/demo-component-c.component';
import { DemoComponentDComponent } from './demo-component-d/demo-component-d.component';
import { DemoComponentEComponent } from './demo-component-e/demo-component-e.component';
import { DemoComponentFComponent } from './demo-component-f/demo-component-f.component';
import { DemoComponentGComponent } from './demo-component-g/demo-component-g.component';
import { DemoComponentHComponent } from './demo-component-h/demo-component-h.component';
import { DemoComponentIComponent } from './demo-component-i/demo-component-i.component';
import { DemoComponentJComponent } from './demo-component-j/demo-component-j.component';
import { DemoTypes } from './demo-types';
import { HttpClient } from '@angular/common/http';
import { SignalRService } from '../signalr.servce';

@Component({
  selector: 'app-amazon-demo-container',
  templateUrl: './amazon-demo-container.component.html',
  styleUrls: ['./amazon-demo-container.component.css']
})

export class AmazonDemoContainerComponent implements OnInit {
  @ViewChild(DemoHostDirective, { static: true })
  demoHost!: DemoHostDirective;
  demoType: string = DemoTypes.DemoA.toString();
  userCountry: string = '';
  highbandWidth: boolean = true;
  constructor(private cfr: ComponentFactoryResolver, private http: HttpClient,
    private signalr:SignalRService) { }
  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });
  }

  ngOnInit(): void {
    this.signalr.startConnection();
    this.signalr.addActivityListerner();   

    this.getPosition().then(x => {
      let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${x.lat},${x.lng}&key=AIzaSyC0Yznc9lUD-yByt397E8i3X3iLmS5oYTg`;
      url = encodeURI(url);
      this.http.post<any>(url, null).subscribe(
        (response) => {
          if (response.results.find((x: { address_components: any[]; }) => x.address_components.find(y => y.short_name == 'US'))) {
            this.userCountry = 'US';
            console.log('user country is the us');
          }
        },
        (error) => {
          console.log(error);
        },
        ()=>{
          this.redirect();
        }
      );
    })

  }

  redirect() {
    const viewContainerRef = this.demoHost.viewContainerRef;
    viewContainerRef.clear();
    let component;
    if (this.userCountry == 'US') {
      component = DemoComponentAComponent    }
    else if (this.highbandWidth) {
      component = DemoComponentAComponent;
    }
    else if (navigator.cookieEnabled) {
      component = DemoComponentBComponent;
    }
    else if (navigator.platform != 'Win32') {
      component = DemoComponentCComponent;
    }
    else if (document.referrer != '') {
      component = DemoComponentDComponent;
    }
    else if (navigator.userAgent.indexOf('samsung')) {
      component = DemoComponentEComponent;
    }
    else if (!window.screenTop && !window.screenY) {
      //full screen
      component = DemoComponentFComponent;
    }
    else if (window.screen.width > 1400 && window.screen.height > 800) {
      //full hd
      component = DemoComponentGComponent;
    }
    else if (navigator.doNotTrack) {
      component = DemoComponentHComponent;
    }
    else if (navigator.language == "en-US") {
      component = DemoComponentIComponent
    }
    else if (this.userCountry != 'US') {
      component = DemoComponentJComponent
    }
    else {
      component = DemoComponentAComponent
    }


    const componentFactory =
      this.cfr.resolveComponentFactory(component);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    console.log('user country:' + this.userCountry);
    console.log('high bandwidth:' + this.highbandWidth);
    console.log('cookie enabled:' + navigator.cookieEnabled);
    console.log('platform:' + navigator.platform);
    console.log('referrer:' + document.referrer);
    console.log('userAgent:' + navigator.userAgent);
    console.log('full screen:'); console.log(!window.screenTop && !window.screenY);
    console.log('dont track:' + navigator.doNotTrack);
    console.log('language:' + navigator.language);
  }
  counter = 0;
  public onButtonClick():void{
    this.counter++;
    this.signalr.activityHandler("counter count =" + this.counter);

  }
}
