import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdTableComplete } from './components/table-complete/table-complete.component';
import { NgbdSortableHeader } from './directives/sortable.directive';
import { UsersPageComponent } from './components/pages/users-page/users-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NgbdTableComplete,
    NgbdSortableHeader,
    UsersPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
