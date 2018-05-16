import { Injectable } from '@angular/core';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  defaultArticlesList:Array<Article>=[];
  actualId:number=5;

  constructor() {
    this.setDefaultData();
   }

  getAll():Array<Article> {
    return this.defaultArticlesList;
  }

  getById(id: number):Article {
      return this.defaultArticlesList.find(article => article.id == id);

  }

  create(_article: Article) {
    this.actualId++;
    _article.id=this.actualId;
    this.defaultArticlesList.push(_article);
  }

  update(_article: Article) {
     let articleUpdate:Article = this.defaultArticlesList.find(article => article.id == _article.id);
     articleUpdate.name=_article.name;
     articleUpdate.reference=_article.reference;
     articleUpdate.year=_article.year;
  }

  delete(id: number) {
    const index = this.defaultArticlesList.findIndex(article => article.id === id);
    this.defaultArticlesList.splice(index, 1)
  }


  setDefaultData(){
    this.defaultArticlesList.push({id: 1, reference: "as5203010", name: "Asus Phone", description: "Good Asus Phone", year: "2017"});
    this.defaultArticlesList.push({id: 2, reference: "3321fSHSS", name: "LG Phone", description: "Big LG Phone", year: "2017"});
    this.defaultArticlesList.push({id: 3, reference: "mNnsmOsSN", name: "Sony Phone", description: "Good Sony", year: "2018"});
    this.defaultArticlesList.push({id: 4, reference: "22dFFP301", name: "Asus Mouse", description: "Best Performance", year: "2017"});
    this.defaultArticlesList.push({id: 5, reference: "33FFG3222", name: "LG tv", description: "TV 50 inch", year: "2017"});
  }

}