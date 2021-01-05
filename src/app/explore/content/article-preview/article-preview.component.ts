import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss'],
})
export class ArticlePreviewComponent implements OnInit {
  @Input() title!: string;
  @Input() image!: string;
  @Input() text!: string;

  articleRoute!: string;

  constructor() {}

  ngOnInit(): void {
    this.articleRoute = this.title.replace(/\s+/g, '-').toLowerCase();
  }
}
