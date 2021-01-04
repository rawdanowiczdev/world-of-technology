import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { ExploreRoutingModule } from './explore-routing.module';
import { ArticleComponent } from './content/article/article.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [ContentComponent, ArticleComponent, NavigationComponent],
  imports: [SharedModule, ExploreRoutingModule, ReactiveFormsModule],
})
export class ExploreModule {}
