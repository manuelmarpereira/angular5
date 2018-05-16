import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddArticleComponent } from './add/add-article/add-article.component';
import { EditArticleComponent } from './edit/edit-article/edit-article.component';
import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'article/add',
    component: AddArticleComponent, canActivate: [AuthGuard]
  },

  {
    path: 'article/edit/:id',
    component: EditArticleComponent, canActivate: [AuthGuard]
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
