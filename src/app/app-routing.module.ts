import { GetdetailsComponent } from './getdetails/getdetails.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  { path: 'create', component: CreateComponent},
  {path: 'edit', component:EditComponent},
  {path: 'delete', component: DeleteComponent},
  {path: 'getdetails', component: GetdetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
