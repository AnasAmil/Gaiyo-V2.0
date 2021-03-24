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
    InstafeatureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
