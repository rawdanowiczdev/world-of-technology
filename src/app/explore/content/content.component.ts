import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContentService } from './content.service';
import { Subscription } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';

import { Article } from '../graphql/article';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [
    trigger('search-animation', [
      transition(':leave', [
        animate(
          150,
          style({
            opacity: 0,
            transform: 'scale(0.35)',
          })
        ),
      ]),
    ]),
  ],
})
export class ContentComponent implements OnInit, OnDestroy {
  articles: Article[] = [];
  getArticles!: Subscription;
  fetchingData = true;

  exploreArticles = true;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.fetchData();
    this.getArticles = this.contentService.updateArticles.subscribe(
      (data: Article[]) => {
        this.fetchingData = false;
        this.articles = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.getArticles.unsubscribe();
  }
}
