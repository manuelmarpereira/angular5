import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../models/User';
import { Article } from '../models/Article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <h3>All Articles:</h3>
    <div><app-search (term)="searchTerm = $event"
                     (searchCol)="searchCol  = $event"></app-search>

      <a class="pull-right link-margin-top" [routerLink]="['/article/add']">
        <span class="glyphicon glyphicon-plus"></span>Add new Article
      </a>
    </div>
    <div class="table-responsive">
    <app-list-article [searchTerm]="searchTerm"
                      [searchCol]="searchCol"></app-list-article>
    </div>
  `,
  styles: [`.link-margin-top{margin-top:15px}`]
})
export class HomeComponent implements OnInit {

  searchTerm: string;
  searchCol: string;

  constructor() {
  
  }  

  ngOnInit() {
  }

}