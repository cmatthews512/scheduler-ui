import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeagueListComponent } from './league-list.component';
import { LeagueDetailComponent } from './league-detail.component';


@NgModule({
  declarations: [
    LeagueListComponent,
    LeagueDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'league', component: LeagueListComponent },
      { path: 'league/:id', component: LeagueDetailComponent }
    ])
  ]
})
export class LeagueModule { }