import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './componet/home/home.component';
import { ContactComponent } from './componet/contact/contact.component';
import { AboutComponent } from './componet/about/about.component';
import { FormComponent } from './componet/form/form.component';
import { DetailsComponent } from './componet/details/details.component';
import { NavComponent } from './componet/nav/nav.component';
import { ViewComponent } from './componet/view/view.component';
import { ReviewinfoComponent } from './componet/reviewinfo/reviewinfo.component';
import { AppRoutes } from './app.routes.module';
import{RouterModule} from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    FormComponent,
    DetailsComponent,
    NavComponent,
    ViewComponent,
    ReviewinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
