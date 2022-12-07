import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes =[
  { path: 'home', redirectTo: 'home/todos', pathMatch: 'full' },
  { path: '', redirectTo: 'home/todos', pathMatch: 'full' },
    {path: 'home/:check', component: HomeComponent},
    {path: 'about', component: AboutComponent }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
