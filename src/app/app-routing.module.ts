import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AmazonDemoComponent } from './amazon-demo/amazon-demo.component';
import { AmazonDemoOldComponent } from './amazon-demo-old/amazon-demo-old.component';
import { AmazonDemoContainerComponent } from './amazon-demo-container/amazon-demo-container.component';

const routes: Routes = [
  { path: '', redirectTo: '/amazon-demo/1', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  {path:'amazon-demo/:type', component: AmazonDemoContainerComponent},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
