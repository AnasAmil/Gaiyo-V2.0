import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AnimesComponent } from './components/animes/animes.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { InstafeatureComponent } from './components/instafeature/instafeature.component';
import { LogSignComponent } from './pages/log-sign/log-sign.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { SeriesComponent } from './components/series/series.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { ProductImgComponent } from './components/product-img/product-img.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { SizeComponent } from './components/size/size.component';
import { ColorsComponent } from './components/colors/colors.component';
import { SizeChartComponent } from './components/size-chart/size-chart.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AccountComponent } from './components/account/account.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { AddNewAdressComponent } from './components/add-new-adress/add-new-adress.component';
import { CovidComponent } from './components/covid/covid.component';
import { CovidDescriptionComponent } from './pages/covid-description/covid-description.component';
import { ShowPrdctComponent } from './components/show-prdct/show-prdct.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PrdctDetailsComponent } from './pages/prdct-details/prdct-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckProductCartComponent } from './pages/check-product-cart/check-product-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    FeaturedComponent,
    HomeComponent,
    FooterComponent,
    AnimesComponent,
    CarouselComponent,
    InstafeatureComponent,
    LogSignComponent,
    SignupComponent,
    LoginComponent,
    SeriesComponent,
    ClothingComponent,
    ProductImgComponent,
    AccessoriesComponent,
    SizeComponent,
    ColorsComponent,
    SizeChartComponent,
    ShoppingCartComponent,
    AccountComponent,
    AddToCartComponent,
    AddNewAdressComponent,
    CovidComponent,
    CovidDescriptionComponent,
    ShowPrdctComponent,
    ProductDetailsComponent,
    PrdctDetailsComponent,
    CartComponent,
    CheckProductCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
