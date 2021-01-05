import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

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

  titleURL!: string;
  subURL!: Subscription;
  subData!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService
  ) {}

  ngOnInit(): void {
    this.subURL = this.route.params.subscribe((params: Params) => {
      this.titleURL = params.title;
      this.contentService.fetchData();
    });

    this.subData = this.contentService.dataFromCMS.subscribe(
      (data: Article[]) => {
        data.forEach((article) => {
          const articleTitle = article.title.replace(/\s+/g, '-').toLowerCase();
          if (articleTitle === this.titleURL) {
            this.article = article;
          }
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subURL.unsubscribe();
    this.subData.unsubscribe();
  }
}
