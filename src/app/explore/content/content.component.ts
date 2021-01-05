import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContentService } from './content.service';
import { Subscription } from 'rxjs';

import { Article } from '../graphql/article';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit, OnDestroy {
  articles: Article[] = [];
  getArticles!: Subscription;

  exploreArticles = true;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.fetchData();
    this.getArticles = this.contentService.dataFromCMS.subscribe(
      (data: Article[]) => {
        this.articles = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.getArticles.unsubscribe();
  }
}
