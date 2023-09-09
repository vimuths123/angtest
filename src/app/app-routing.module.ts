import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import your components
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },      // Home route
  { path: 'about', component: AboutComponent }, // About route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
