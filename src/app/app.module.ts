import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DataTableComponent } from './data-table/data-table.component';
import {HttpClientModule} from '@angular/common/http';
import { MusteriformComponent } from './musteriform/musteriform.component'
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth_guards';
import { JwtModule } from '@auth0/angular-jwt';
const appRoutes:Routes=[
  {path:"",component:RegisterComponent},
  {path:"register",component:RegisterComponent},
  {path:'musteriform',component:MusteriformComponent,canActivate:[AuthGuard]}
]
export function tokenGetter(){
  return localStorage.getItem("token");
}
@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    MusteriformComponent,
    NavbarComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:44324"],
        disallowedRoutes: ["localhost:44324/api/register"],
      },
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
