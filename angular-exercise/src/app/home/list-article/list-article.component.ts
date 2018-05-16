import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/Article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-list-article',
  template: `
  <table class="table table-striped">
  <thead>
    <tr>
      <th>Reference</th>
      <th>Name</th>
      <th>Description</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr appHighlight='blue' *ngFor="let article of (articles | filter:searchTerm:getSearchCol())">
      <td>{{article.reference}}</td>
      <td>{{article.name}}</td>
      <td>{{article.description}} </td>
      <td>{{article.year}} </td>
      <td>      
        <a  [routerLink]="['/article/edit', article.id]" class="text-warning">
          <span class="glyphicon glyphicon-edit"></span> Edit
        </a>
      </td>
      <td>
        <a (click)="deleteArticle(article.id)" class="text-danger">
          <span class="glyphicon glyphicon-remove text-danger"></span> Delete
        </a>
     </td>
    </tr>
  </tbody>
</table>
  `,
  styles:[]
})
export class ListArticleComponent implements OnInit {

  articles: Article[]=[];

  teste:string = "name";

  @Input()
  searchTerm: string;

  @Input()
  searchCol: string;
  
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
   this.loadAllArticles();
  }

  private loadAllArticles() {
    this.articles = this.articleService.getAll();
 }

 private deleteArticle(id){
  this.articleService.delete(id);
 }

 private getSearchCol():string{
  if(!this.searchCol){
    this.searchCol="name"
  }
  return this.searchCol;
 }

}
