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
import {ProductSubCategoryComponent} from './components/catalogue/product-sub-category/product-sub-category.component';
import {ProductsListComponent} from './components/catalogue/products-list/products-list.component';
import {SearchComponent} from './components/search/search.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {CallbackPopupComponent} from './components/callback-popup/callback-popup.component'
import {HttpClientModule} from "@angular/common/http";
import { ErrorComponent } from './components/error/error.component';
import { InProgressComponent } from './components/in-progress/in-progress.component';

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
    ProductsListComponent,
    SearchComponent,
    CallbackPopupComponent,
    ErrorComponent,
    InProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
