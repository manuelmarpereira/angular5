import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Article } from '../../models/Article';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-add-article',
  template: `
  <app-header></app-header>
  <div class="col-md-6 col-md-offset-3">
    <h3>New Article:</h3>
    <app-form-article  [article]="article"
                       [isForUpdate]="isForUpdate"></app-form-article>
  </div>

  `,
  styles: []
})
export class AddArticleComponent implements OnInit {

  article:Article;
  isForUpdate:boolean=false;

  constructor(private route: ActivatedRoute,
              private router: Router,  
              private articleService:ArticleService) {

                this.article={id: 0, reference: "", name: "", description: "", year: ""}
              }

  ngOnInit() {
  }

}
