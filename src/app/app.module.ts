import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Spin2winComponent } from './spin2win/spin2win.component';
import { SpinWheelComponent } from './spin2win/spinwheel/spinwheel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Spin2winNotificationComponent } from './spin2win/spin2win-notification/spin2win-notification.component';
import { Spin2winAdvertisementComponent } from './spin2win/spin2win-advertisement/spin2win-advertisement.component';
import { RewardsCrudComponent } from './spin2win-admin/rewards-crud/rewards-crud.component';
import { NotificationCrudComponent } from './spin2win-admin/notification-crud/notification-crud.component';
import { PieChartComponent } from './spin2win-admin/pie-chart/pie-chart.component';
import { Spin2winAdminComponent } from './spin2win-admin/spin2win-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes:Routes=[
  {
    component:NotificationCrudComponent,
    path:'notification'
  },
  {
    component:RewardsCrudComponent,
    path:'spinwheel'
  },
  {
    component:Spin2winAdminComponent,
    path:'admin-dashboard'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    Spin2winComponent,
    SpinWheelComponent,
    Spin2winNotificationComponent,
    Spin2winAdvertisementComponent,
    RewardsCrudComponent,
    NotificationCrudComponent,
    PieChartComponent,
    Spin2winAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
