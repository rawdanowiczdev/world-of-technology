import { Injectable } from '@angular/core';
import { ARTICLES_QUERY } from '../graphql/gql';
import { Apollo } from 'apollo-angular';
import { map, take } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Article } from '../graphql/article';

@Injectable({ providedIn: 'root' })
export class ContentService {
  articles!: Article[];
  updateArticles = new Subject<Article[]>();

  constructor(private apollo: Apollo) {}

  fetchData(): void {
    this.apollo
      .watchQuery<any>({
        query: ARTICLES_QUERY,
      })
      .valueChanges.pipe(
        take(1),
        map((data) => {
          return data.data.articles.slice().sort((a: Article, b: Article) => {
            if (a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) {
              return -1;
            }
            if (a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase()) {
              return 1;
            }
            return 0;
          });
        })
      )
      .subscribe((data: Article[]) => {
        this.articles = data;
        this.updateArticles.next(this.articles);
      });
  }

  showSearchResults(value: string): void {
    if (value !== '') {
      const results = this.articles.slice().filter((article: Article) => {
        return article.title
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase());
      });
      this.updateArticles.next(results);
    } else {
      this.updateArticles.next(this.articles);
    }
  }
}
