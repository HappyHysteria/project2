import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router'
import { ErrorComponent } from "./components/error/error.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { SubCategoryComponent } from "./components/sub-category/sub-category.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ProductPageComponent } from "./pages/product-page/product-page.component";


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch:'full'},
    { path: 'home', component: HomePageComponent },
    { path: 'products/:catId', component: ProductPageComponent },
    { path: 'products/s/:subId', component: ProductPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: '**', component: ErrorComponent}

]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}