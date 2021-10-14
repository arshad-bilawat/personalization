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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-amazon-demo-container',
  templateUrl: './amazon-demo-container.component.html',
  styleUrls: ['./amazon-demo-container.component.css']
})
export class AmazonDemoContainerComponent implements OnInit {
  @ViewChild(DemoHostDirective, { static: true })
  demoHost!: DemoHostDirective;
  demoType: string=DemoTypes.DemoA.toString();

  constructor(private cfr: ComponentFactoryResolver,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    let type: number=parseInt(this.route.snapshot.paramMap.get('type')!);
    this.demoType = DemoTypes[type];

    const viewContainerRef = this.demoHost.viewContainerRef;
    viewContainerRef.clear();
    let component;
    switch(this.demoType){
      case "DemoA":
        component = DemoComponentAComponent;
        break;
      case "DemoB":
        component = DemoComponentBComponent;
        break;
        case "DemoC":
          component = DemoComponentCComponent;
          break;
          case "DemoD":
        component = DemoComponentDComponent;
        break;
        case "DemoE":
        component = DemoComponentEComponent;
        break;
        case "DemoF":
        component = DemoComponentFComponent;
        break;
        case "DemoG":
        component = DemoComponentGComponent;
        break;
        case "DemoH":
        component = DemoComponentHComponent;
        break;
        case "DemoI":
        component = DemoComponentIComponent;
        break;
        case "DemoJ":
        component = DemoComponentJComponent;
        break;
        default:
        component=DemoComponentAComponent
        break
    }
    const componentFactory = 
    this.cfr.resolveComponentFactory(component);
    const componentRef=viewContainerRef.createComponent(componentFactory);
  }

}
