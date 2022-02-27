import { Component, OnInit, ViewChild, ViewContainerRef, Directive, ComponentFactoryResolver, HostListener } from '@angular/core';
import { DemoHostDirective } from './demo-host.directive';
import { AddCartComponent } from './add-cart/add-cart.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { ImagePrioritizeComponent } from './image-prioritize/image-prioritize.component';
import { OriginalComponent } from './original/original.component';
import { ProductFeatureComponent } from './product-feature/product-feature.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { ProductReviewComponent } from './product-review/product-review.component';
import { ProductTitleComponent } from './product-title/product-title.component';
import { PromotionComponent } from './promotion/promotion.component';
import { ShowOtherProductsComponent } from './show-other-products/show-other-products.component';
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
    private signalr: SignalRService) { }
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
        () => {
          // this.redirect();
        }
      );
    })

  }

  // redirect() {
  //   const viewContainerRef = this.demoHost.viewContainerRef;
  //   viewContainerRef.clear();
  //   let component;
  //   if (this.userCountry == 'US') {
  //     component = AddCartComponent    }
  //   else if (this.highbandWidth) {
  //     component = AddCartComponent;
  //   }
  //   else if (navigator.cookieEnabled) {
  //     component = BuyNowComponent;
  //   }
  //   else if (navigator.platform != 'Win32') {
  //     component = ImagePrioritizeComponent;
  //   }
  //   else if (document.referrer != '') {
  //     component = OriginalComponent;
  //   }
  //   else if (navigator.userAgent.indexOf('samsung')) {
  //     component = ProductFeatureComponent;
  //   }
  //   else if (!window.screenTop && !window.screenY) {
  //     //full screen
  //     component = ProductPriceComponent;
  //   }
  //   else if (window.screen.width > 1400 && window.screen.height > 800) {
  //     //full hd
  //     component = ProductReviewComponent;
  //   }
  //   else if (navigator.doNotTrack) {
  //     component = ProductTitleComponent;
  //   }
  //   else if (navigator.language == "en-US") {
  //     component = PromotionComponent
  //   }
  //   else if (this.userCountry != 'US') {
  //     component = ShowOtherProductsComponent
  //   }
  //   else {
  //     component = AddCartComponent
  //   }


  //   const componentFactory =
  //     this.cfr.resolveComponentFactory(component);
  //   const componentRef = viewContainerRef.createComponent(componentFactory);
  //   console.log('user country:' + this.userCountry);
  //   console.log('high bandwidth:' + this.highbandWidth);
  //   console.log('cookie enabled:' + navigator.cookieEnabled);
  //   console.log('platform:' + navigator.platform);
  //   console.log('referrer:' + document.referrer);
  //   console.log('userAgent:' + navigator.userAgent);
  //   console.log('full screen:'); console.log(!window.screenTop && !window.screenY);
  //   console.log('dont track:' + navigator.doNotTrack);
  //   console.log('language:' + navigator.language);
  // }
  // counter = 0;
  // public onButtonClick():void{
  //   this.counter++;

  // }

  @HostListener('click', ['$event']) onClick($event: any) {
    const hotListernerList = ["BUTTON", "A"];
    if (hotListernerList.includes($event.target.nodeName)) {
      this.signalr.activityHandler($event.type,
        $event.target.textContent,
        $event.target.nodeName,
        document.title,
        document.URL);
    }
    else if ($event.view.getSelection().type == 'Range') {
      this.signalr.activityHandler($event.type + ' Range',
        $event.view.getSelection().toString(),
        $event.target.nodeName,
        document.title,
        document.URL);
    }
  }

  @HostListener('window:load', ['$event'])
  onPageLoad($event: Event) {
    setTimeout(() => {                           // <<<---using ()=> syntax
      this.signalr.activityHandler($event.type,
        '',
        '',
        document.title,
        document.URL);
    }, 3000);
  }
}
