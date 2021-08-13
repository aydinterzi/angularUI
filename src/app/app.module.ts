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
const appRoutes:Routes=[
  {path:"",component:RegisterComponent,canActivate:[AuthGuard]},
  {path:"register",component:RegisterComponent,canActivate:[AuthGuard]},
  {path:'musteriform',component:MusteriformComponent,canActivate:[AuthGuard]}
]
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
