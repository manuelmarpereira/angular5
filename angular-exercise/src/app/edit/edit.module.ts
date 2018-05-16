import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { SharedModule } from '../shared/shared.module';
import { FormArticleComponent } from '../form-article/form-article.component';

@NgModule({
  imports: [
    CommonModule,
    EditRoutingModule,
    SharedModule
  ],
  declarations: [EditArticleComponent]
})
export class EditModule { }
