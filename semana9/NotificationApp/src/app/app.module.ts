import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';




@NgModule({
  declarations: [
    AppComponent,
    NotificationListComponent,
    HeaderComponent,
    FooterComponent,
    FilterComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    MdbModalModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
