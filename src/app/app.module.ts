import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DataTableComponent } from './data-table/data-table.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MusteriformComponent } from './musteriform/musteriform.component'
import { RouterModule, Routes } from '@angular/router';
const appRoutes:Routes=[
  {path:'',component:LoginComponent},
  {path:'musteriform',component:MusteriformComponent},
  {path:'login',component:LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DataTableComponent,
    LoginComponent,
    MusteriformComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
