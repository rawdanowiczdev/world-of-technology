import { NgModule } from '@angular/core';
import { StartComponent } from './start/start.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [StartComponent, FooterComponent],
  exports: [StartComponent, FooterComponent],
})
export class CoreModule {}
