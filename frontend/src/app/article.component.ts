import {Component, Input, HostBinding, EventEmitter, Output} from 'angular2/core';
import {Article} from './app.component';

@Component({
  selector: 'reddit-article',
  template: `
<div class="row">
    <div class="col m12">
        <div class="card">
            <div class="card-content">
                <span class="card-title">{{ article.votes }} |
                    <a href="{{article.link}}" target="_blank"> {{ article.title }} ({{ article.domain() }})</a>
                </span>
            </div>
            <div class="card-action">
                <a (click)="voteUp()" class="waves-effect waves-light btn">
                    <i class="material-icons left">thumb_up</i>upvote</a>
                <a (click)="voteDown()" class="waves-effect waves-light btn">
                    <i class="material-icons left">thumb_down</i>downvote</a>
                <a (click)="report()" class="waves-effect waves-light btn">
                    <i class="material-icons left">warning</i>report</a>
            </div>
        </div>
    </div>
</div>
`
})
export class ArticleComponent {
  @HostBinding('class.row')
  @Input() article: Article;
  @Output() onReportLink: EventEmitter<Article> = new EventEmitter();

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  report(): boolean {
    this.onReportLink.emit(this.article);
    return false;
  }
}
