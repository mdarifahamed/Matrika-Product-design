import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
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



const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"chain",component:ChainComponent},
  {path:"nose",component:NoseComponent},
  {path:"ring",component:RingComponent},
  {path:"bracelet",component:BraceletComponent},
  {path:"bangles", component:BanglesComponent},
  {path:"gift", component:GiftComponent},
  {path:"product", component:ProductComponent},
  {path:"contact", component:ContactComponent},
  {path:"wishlist", component:WishlistComponent},
  {path:"cart", component:CartComponent},
  {path:"myorder",component:MyorderComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
