import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReadlistComponent} from "./readlist/readlist.component";
import {IsreadingComponent} from "./isreading/isreading.component";


const routes: Routes = [
  {
    path: 'read-list', component: ReadlistComponent
  },
  {
    path: 'is-reading', component: IsreadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
