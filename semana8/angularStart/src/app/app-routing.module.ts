import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: 'SchoolForm', component:  FormComponent},
    {path: 'SerieCard', component:  CardComponent},

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
