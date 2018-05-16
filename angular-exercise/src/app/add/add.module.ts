import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingModule } from './add-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddArticleComponent } from './add-article/add-article.component';
import { FormArticleComponent } from '../form-article/form-article.component';

@NgModule({
  imports: [
    CommonModule,
    AddRoutingModule,
    SharedModule
  ],
  declarations: [AddArticleComponent]
})
export class AddModule { }
