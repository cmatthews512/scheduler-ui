import { LeagueModule } from './components/league/league.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeamComponent } from './components/team/team.component';
import { SeasonComponent } from './components/season/season.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    TeamComponent,
    SeasonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeagueModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
