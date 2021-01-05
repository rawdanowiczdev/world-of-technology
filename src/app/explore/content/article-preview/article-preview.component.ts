import { Component, Input, OnInit } from '@angular/core';

import { Article } from '../../graphql/article';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss'],
})
export class ArticlePreviewComponent implements OnInit {
  @Input() article!: Article;

  articleRoute!: string;

  constructor() {}

  ngOnInit(): void {
    this.articleRoute = this.article.title.replace(/\s+/g, '-').toLowerCase();
  }
}
