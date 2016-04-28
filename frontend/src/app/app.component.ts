import {Component, ViewEncapsulation} from 'angular2/core';
import {ArticleComponent} from './article.component';
import {HotelsComponent} from './hotels.component';
import {MaterializeDirective} from 'angular2-materialize';

export class Article {

  public title: string;
  public link: string;
  public votes: number;

  constructor(title: string, link: string, votes: number) {
    this.title = title;
    this.link = link;
    this.votes = votes;
  }

  voteUp() {
    this.votes += 1;
  }

  voteDown() {
    this.votes -= 1;
  }

  domain(): string {
    try {
      const link: string = this.link.split('//')[1];
      return link.split('/')[0];
    } catch (err) {
      return undefined;
    }
  }
}

export class Hotel {
  public id: number;
  public name: string;
  public description: string;
  public zipCode: string;
  public city: string;
  public countryCode: string;
  public website: string;
  public tripAdvisorUrl: string;
  public holidayCheckUrl: string;
  public rooms: number;

  constructor(id: number, name: string, description: string, zipCode: string, city: string, countryCode: string, website: string, tripAdvisorUrl: string, holidayCheckUrl: string, rooms: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.zipCode = zipCode;
    this.city = city;
    this.countryCode = countryCode;
    this.website = website;
    this.tripAdvisorUrl = tripAdvisorUrl;
    this.holidayCheckUrl = holidayCheckUrl;
    this.rooms = rooms;
  }

  domain(): string {
    try {
      const link: string = this.website.split('//')[1];
      return link.split('/')[0];
    } catch (err) {
      return undefined;
    }
  }
}

@Component({
  selector: 'app',
  directives: [HotelsComponent, ArticleComponent, MaterializeDirective],
  styles: [
    require('../assets/css/main.scss')
  ],
  encapsulation: ViewEncapsulation.None,
  template: `
<div class="row">
<h1>Hotels</h1>
<div class="col m12">
    <hotels></hotels>
</div>
</div>
<!--<div class="row">-->
    <!--<form class="col m12">-->
        <!--<div class="row">-->
            <!--<div class="input-field col m6">-->
                <!--<input id="title" type="text" class="validate" [(ngModel)]="newtitle">-->
                <!--<label for="title">Title</label>-->
            <!--</div>-->
            <!--<div class="input-field col m6">-->
                <!--<input id="link" type="text" class="validate" [(ngModel)]="newlink">-->
                <!--<label for="link">Link</label>-->
            <!--</div>-->
        <!--</div>-->
        <!--<a (click)="addArticle()" [ngClass]="{disabled: !formValid()}"-->
           <!--class="waves-effect waves-light btn">submit</a>-->
    <!--</form>-->
<!--</div>-->

<!--<div class="row">-->
    <!--<div class="col m12">-->
        <!--<reddit-article *ngFor="#article of sortedArticles(); #odd=odd"-->
                  <!--[article]="article" (onReportLink)="reportLink($event)"-->
                  <!--[ngClass]="{'odd': odd}">-->
        <!--</reddit-article>-->
    <!--</div>-->
<!--</div>-->

<!--<div class="row">-->
    <!--<div class="col m12">-->
        <!--<a materialize="leanModal" [materializeParams]="[{dismissible: false}]"-->
           <!--class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>-->
    <!--</div>-->
<!--</div>-->
<!--<div id="modal1" class="modal">-->
    <!--<div class="modal-content">-->
        <!--<h4>Modal Header</h4>-->
        <!--<p>A bunch of text</p>-->
    <!--</div>-->
    <!--<div class="modal-footer">-->
        <!--<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>-->
    <!--</div>-->
<!--</div>-->
`
})
export class App {
  newtitle: string;
  newlink: string = 'http://';
  articles: Article[];

  private urlRegex: RegExp = /http:\/\/.+\..+/;

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 15),
      new Article('Wat', 'http://z0r.de', 10),
      new Article('So cool', 'http://www.microsoft.com', -999)
    ];
  }

  static isEmpty(s: string): boolean {
    return s === undefined || s.trim() === '';
  }

  reportLink(article: Article): void {
    alert('reported ' + article.link);
  }

  titleValid(): boolean {
    return !App.isEmpty(this.newtitle);
  }

  linkValid(): boolean {
    return !App.isEmpty(this.newlink) && this.urlRegex.test(this.newlink);
  }

  formValid(): boolean {
    return this.titleValid() && this.linkValid();
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  addArticle(): void {
    this.articles.push(new Article(this.newtitle, this.newlink, 0));
    this.newtitle = undefined;
    this.newlink = 'http://';
  }
}
