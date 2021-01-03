import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() title!: string;
  @Input() image!: string;
  @Input() text!: string;

  constructor() {}

  ngOnInit(): void {}
}
