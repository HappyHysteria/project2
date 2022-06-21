import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoryComponent } from './components/category/category.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './components/error/error.component';
import { BodyComponent } from './components/body/body.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';



 



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    RegisterComponent,
    CategoryComponent,
    HomePageComponent,
    ProductPageComponent,
    SubCategoryComponent,
    ProductListComponent,
    ErrorComponent,
    BodyComponent,
    AboutPageComponent,
    ContactPageComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
