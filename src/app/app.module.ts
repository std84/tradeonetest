import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailedTnstodayComponent } from './detailed-tnstoday/detailed-tnstoday.component';
import { ListTnstodayComponent } from './list-tnstoday/list-tnstoday.component';
import { TnsChartService } from './_services/tns-chart.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
   declarations: [
      AppComponent,
      DetailedTnstodayComponent,
      ListTnstodayComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule
   ],
   providers: [TnsChartService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
