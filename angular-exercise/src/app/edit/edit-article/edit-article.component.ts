import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Article } from '../../models/Article';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-article',
  template: `
  <app-header></app-header>
  <div class="col-md-6 col-md-offset-3">
  <h3>Edit Article {{article.reference}}:</h3>
  <app-form-article [article]="article"
                    [isForUpdate]="isForUpdate"></app-form-article>
  `,
  styles: []
})
export class EditArticleComponent implements OnInit {

  article:Article;
  isForUpdate:boolean=true;
  id: number;
  private paramsSubs: any;

  constructor(private articleService:ArticleService,
              private route: ActivatedRoute) { 
                
              }


  ngOnInit() {
    this.paramsSubs = this.route.params.subscribe(params => {
      this.id = +params['id']; 
   });

   this.article=this.articleService.getById(this.id);
  }

  ngOnDestroy() {
    this.paramsSubs.unsubscribe();
  }

}
