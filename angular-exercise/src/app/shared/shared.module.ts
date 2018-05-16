import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LoginService } from '../services/login.service';
import { ArticleService } from '../services/article.service';
import { HeaderComponent } from '../header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormArticleComponent } from '../form-article/form-article.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({

  imports: [

    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],

  declarations: [HeaderComponent, FormArticleComponent],

  providers: [ArticleService, LoginService],

  exports: [HeaderComponent, FormArticleComponent]

})

export class SharedModule { }