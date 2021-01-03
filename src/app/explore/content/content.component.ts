import { Component, OnInit } from '@angular/core';

import { ARTICLES_QUERY } from '../graphql/gql';
import { Article } from '../graphql/article';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  articles: Article[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<any>({
        query: ARTICLES_QUERY,
      })
      .valueChanges.pipe(
        map((data) => {
          return data.data.articles;
        })
      )
      .subscribe((data: Article[]) => {
        this.articles = data;
      });
  }
}
