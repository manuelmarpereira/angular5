import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { ListArticleComponent } from './list-article/list-article.component';
import { HomeComponent } from './home.component';
import { FilterPipe } from './../pipes/filter.pipe';
import { HeaderComponent } from '../header/header.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { SearchComponent } from '../search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    SharedModule,
    
  ],
  declarations: [ListArticleComponent,
                 HomeComponent,
                 FilterPipe, 
                 HighlightDirective,
                 SearchComponent]
})
export class HomeModule { }
