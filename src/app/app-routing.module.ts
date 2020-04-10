import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImageDetailComponent} from './image-detail/image-detail.component';
import {ImageListComponent} from './image-list/image-list.component';
import {CategoryComponent} from "./category/category.component";

const routes: Routes = [
  { path: 'images', component: ImageListComponent},
  
  { path: '', component: ImageListComponent},
  { path: 'category/:id/image-id/:id', component: ImageDetailComponent},
  { path: 'category/:id', component: CategoryComponent},
  // { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  // { path: 'log-in', component: SigninComponent },
  // { path: 'sign-up', component: SignupComponent },
  // { path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
