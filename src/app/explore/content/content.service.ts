import { Injectable } from '@angular/core';
import { ARTICLES_QUERY } from '../graphql/gql';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Article } from '../graphql/article';

@Injectable({ providedIn: 'root' })
export class ContentService {
  dataFromCMS = new Subject<Article[]>();

  constructor(private apollo: Apollo) {}

  fetchData(): void {
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
        this.dataFromCMS.next(data);
      });
  }
}
