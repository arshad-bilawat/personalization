import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { AmazonDemoComponent } from './amazon-demo/amazon-demo.component';
import { AmazonDemoOldComponent } from './amazon-demo-old/amazon-demo-old.component';
import { AmazonDemoContainerComponent } from './amazon-demo-container/amazon-demo-container.component';
import { AddCartComponent } from './amazon-demo-container/add-cart/add-cart.component';
import { BuyNowComponent } from './amazon-demo-container/buy-now/buy-now.component';
import { ImagePrioritizeComponent } from './amazon-demo-container/image-prioritize/image-prioritize.component';
import { OriginalComponent } from './amazon-demo-container/original/original.component';
import { ProductFeatureComponent } from './amazon-demo-container/product-feature/product-feature.component';
import { ProductPriceComponent  } from './amazon-demo-container/product-price/product-price.component';
import { ProductReviewComponent  } from './amazon-demo-container/product-review/product-review.component';
import { ProductTitleComponent  } from './amazon-demo-container/product-title/product-title.component';
import {  PromotionComponent } from './amazon-demo-container/promotion/promotion.component';
import {  ShowOtherProductsComponent } from './amazon-demo-container/show-other-products/show-other-products.component';
import { DemoHostDirective } from './amazon-demo-container/demo-host.directive';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationComponent } from './amazon-demo-container/notification/notification.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    //HttpClientInMemoryWebApiModule.forRoot(
      //InMemoryDataService, { dataEncapsulation: false }
    //)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    AmazonDemoComponent,
    AmazonDemoOldComponent,
    AmazonDemoContainerComponent,
    AddCartComponent,
    BuyNowComponent,
    ImagePrioritizeComponent,
    OriginalComponent,
    ProductFeatureComponent,
    ProductPriceComponent,
    ProductReviewComponent,
    ProductTitleComponent,
    PromotionComponent,
    ShowOtherProductsComponent,
    DemoHostDirective,
    NotificationComponent
  ],
  bootstrap: [ AppComponent ],
  providers:[],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA 
  ]
})
export class AppModule { }
