import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AmazonDemoComponent } from './amazon-demo/amazon-demo.component';
import { AmazonDemoOldComponent } from './amazon-demo-old/amazon-demo-old.component';
import { AmazonDemoContainerComponent } from './amazon-demo-container/amazon-demo-container.component';
import { NotificationComponent } from './amazon-demo-container/notification/notification.component';
import { AddCartComponent } from './amazon-demo-container/add-cart/add-cart.component';
import { BuyNowComponent } from './amazon-demo-container/buy-now/buy-now.component';
import { ImagePrioritizeComponent } from './amazon-demo-container/image-prioritize/image-prioritize.component';
import { OriginalComponent } from './amazon-demo-container/original/original.component';
import { ProductFeatureComponent } from './amazon-demo-container/product-feature/product-feature.component';
import { ProductPriceComponent } from './amazon-demo-container/product-price/product-price.component';
import { ProductReviewComponent } from './amazon-demo-container/product-review/product-review.component';
import { ProductTitleComponent } from './amazon-demo-container/product-title/product-title.component';
import { PromotionComponent } from './amazon-demo-container/promotion/promotion.component';
import { ShowOtherProductsComponent } from './amazon-demo-container/show-other-products/show-other-products.component';

const routes: Routes = [
  // { path: '', redirectTo: '/amazon-demo', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent },
  {
    path: '', component: AmazonDemoContainerComponent, children: [
      { path: '', redirectTo: 'add-cart', pathMatch: 'full' },
      { path: 'add-cart', component: AddCartComponent },
      { path: 'buy-now', component: BuyNowComponent },
      { path: 'image-prioritize', component: ImagePrioritizeComponent },
      { path: 'original', component: OriginalComponent },
      { path: 'product-feature', component: ProductFeatureComponent },
      { path: 'product-price', component: ProductPriceComponent },
      { path: 'product-review', component: ProductReviewComponent },
      { path: 'product-title', component: ProductTitleComponent },
      { path: 'promotion', component: PromotionComponent },
      { path: 'show-other', component: ShowOtherProductsComponent }
    ]
  },
  { path: 'notifications', component: NotificationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
