import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { ExploreRoutingModule } from './explore-routing.module';
import { ArticlePreviewComponent } from './content/article-preview/article-preview.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ArticleComponent } from './content/article/article.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    ContentComponent,
    ArticlePreviewComponent,
    NavigationComponent,
    ArticleComponent,
  ],
  imports: [
    SharedModule,
    ExploreRoutingModule,
    ReactiveFormsModule,
    MarkdownModule,
  ],
})
export class ExploreModule {}
