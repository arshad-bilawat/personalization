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
import { DemoComponentAComponent } from './amazon-demo-container/demo-component-a/demo-component-a.component';
import { DemoComponentBComponent } from './amazon-demo-container/demo-component-b/demo-component-b.component';
import { DemoComponentCComponent } from './amazon-demo-container/demo-component-c/demo-component-c.component';
import { DemoComponentDComponent } from './amazon-demo-container/demo-component-d/demo-component-d.component';
import { DemoComponentEComponent } from './amazon-demo-container/demo-component-e/demo-component-e.component';
import { DemoComponentFComponent } from './amazon-demo-container/demo-component-f/demo-component-f.component';
import { DemoComponentGComponent } from './amazon-demo-container/demo-component-g/demo-component-g.component';
import { DemoComponentHComponent } from './amazon-demo-container/demo-component-h/demo-component-h.component';
import { DemoComponentIComponent } from './amazon-demo-container/demo-component-i/demo-component-i.component';
import { DemoComponentJComponent } from './amazon-demo-container/demo-component-j/demo-component-j.component';
import { DemoHostDirective } from './amazon-demo-container/demo-host.directive';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    DemoComponentAComponent,
    DemoComponentBComponent,
    DemoComponentCComponent,
    DemoComponentDComponent,
    DemoComponentEComponent,
    DemoComponentFComponent,
    DemoComponentGComponent,
    DemoComponentHComponent,
    DemoComponentIComponent,
    DemoComponentJComponent,
    DemoHostDirective
  ],
  bootstrap: [ AppComponent ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA 
  ]
})
export class AppModule { }
