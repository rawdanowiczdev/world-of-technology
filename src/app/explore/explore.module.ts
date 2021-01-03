import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { ExploreRoutingModule } from './explore-routing.module';
import { ArticleComponent } from './content/article/article.component';

@NgModule({
  declarations: [ContentComponent, ArticleComponent],
  imports: [SharedModule, ExploreRoutingModule],
})
export class ExploreModule {}
