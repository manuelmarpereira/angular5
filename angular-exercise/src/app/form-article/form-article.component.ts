import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Article } from '../models/Article';
import { ArticleService } from '../services/article.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-article',
  template: `
  <form [formGroup]="form" (ngSubmit)="submitForm()">
    <p><label>Reference</label></p>
    <p><input type="text" formControlName="reference"/></p>
    <p><label>Name</label></p>
    <p><input type="text" formControlName="name"/></p>
    <p><label>Description</label></p>
    <p><input type="text" formControlName="description"/></p>
    <p><label>Year</label></p>
    <p><input type="text" formControlName="year"/></p>
    <p><button class="btn btn-primary" type="submit">Save</button></p>
  </form>
  `,
  styles: []
})
export class FormArticleComponent implements OnInit {

  @Input()
  searchTerm: string;

  @Input()
  article:Article;

  @Input()
  isForUpdate:boolean;

  form = new FormGroup({
    reference: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
    year: new FormControl()
  });

  constructor(private articleService:ArticleService, 
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit() {

    this.form.setValue({'name': this.article.name, 
    'reference': this.article.reference, 
    'description': this.article.description, 
    'year': this.article.year,});
  }

  submitForm() {

    if(this.isForUpdate){
      this.articleService.update(this.createArticle());
    }else{
      this.articleService.create(this.createArticle());
    }

    this.router.navigate(['/home']);

  }

  createArticle() :Article {

    let _id:number=0;

    if(this.isForUpdate){
      _id=this.article.id;
    }

    let article : Article ={
      id: _id,
      reference : this.form.get('reference').value,
      name : this.form.get('name').value,
      description : this.form.get('description').value,
      year : this.form.get('year').value
    }

    return article;
  }

}
