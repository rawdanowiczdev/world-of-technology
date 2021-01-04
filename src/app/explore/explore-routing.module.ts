import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { ArticleComponent } from './content/article/article.component';

const routes: Routes = [
  {
    path: 'explore',
    component: ContentComponent,
    children: [{ path: ':article', component: ArticleComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreRoutingModule {}
