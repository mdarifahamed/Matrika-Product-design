import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChainComponent } from './chain/chain.component';
import { NoseComponent } from './nose/nose.component';
import { RingComponent } from './ring/ring.component';
import { BraceletComponent } from './bracelet/bracelet.component';
import { BanglesComponent } from './bangles/bangles.component';
import { GiftComponent } from './gift/gift.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { MyorderComponent } from './myorder/myorder.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    ChainComponent,
    NoseComponent,
    RingComponent,
    BraceletComponent,
    BanglesComponent,
    GiftComponent,
    ProductComponent,
    ContactComponent,
    WishlistComponent,
    CartComponent,
    MyorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
