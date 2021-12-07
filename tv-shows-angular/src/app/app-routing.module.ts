import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MainpageComponent } from './mainpage/mainpage.component';
import { TvshowComponent } from './tvshow/tvshow.component';

const routes: Routes = [
  { path: 'shows', component: TvshowComponent },
  { path: '', component: MainpageComponent},
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }