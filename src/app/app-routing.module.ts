import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavListComponent } from './MyComponents/fav-list/fav-list.component';

const routes: Routes = [
 
   /*  {path: 'home', component:}, */
    {path: 'favlist',component:FavListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [FavListComponent]
