import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookComponent } from './book/book.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchTrainComponent } from './search-train/search-train.component';
//import { AuthGuard } from './services/auth.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'traindetails', component: SearchTrainComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'signup', component: SignupComponent},
  //{path: 'dashboard', component: DashboardComponent ,pathMatch:'full',canActivate:[AuthGuard]},
  {path: 'book', component: BookComponent},
  {path: 'payment', component: PaymentComponent},




  {path: '',redirectTo:'home', pathMatch:'full'},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
