import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CatalogueComponent} from './components/catalogue/catalogue.component';
import {Screen404Component} from './components/screen404/screen404.component';
import {ProductCategoryComponent} from './components/catalogue/product-category/product-category.component';
import {ProductDetailsComponent} from './components/catalogue/product-details/product-details.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {PaymentAndDeliveryComponent} from './components/payment-and-delivery/payment-and-delivery.component';
import {ProductPricePipe} from "./components/catalogue/product.price.pipe";
import { ProductSubCategoryComponent } from './components/catalogue/product-sub-category/product-sub-category.component';
import { ProductsListComponent } from './components/catalogue/products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    Screen404Component,
    ProductCategoryComponent,
    ProductDetailsComponent,
    ContactsComponent,
    PortfolioComponent,
    PaymentAndDeliveryComponent,
    ProductPricePipe,
    ProductSubCategoryComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
