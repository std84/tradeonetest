import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTnstodayComponent } from './list-tnstoday/list-tnstoday.component';
const routes: Routes = [
  {path: '', component: ListTnstodayComponent},




  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
