import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { Article } from '../../graphql/article';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  article: Article = {
    title: '',
    image: { __typename: '', url: '' },
    text: '',
    articleCategory: '',
  };

  titleURL = '';
  getURL!: Subscription;
  getData!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService
  ) {}

  ngOnInit(): void {
    this.contentService.fetchData();

    this.getURL = this.route.params.subscribe((params: Params) => {
      this.titleURL = params.title;
    });

    this.getData = this.contentService.updateArticles
      .pipe(take(1))
      .subscribe((data: Article[]) => {
        const article = data.filter((article: Article) => {
          return (
            article.title.replace(/\s+/g, '-').toLowerCase() === this.titleURL
          );
        });
        if (article[0]) {
          this.article = article[0];
        }
      });
  }

  ngOnDestroy(): void {
    this.getURL.unsubscribe();
    this.getData.unsubscribe();
  }
}
