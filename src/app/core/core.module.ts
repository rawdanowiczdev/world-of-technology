import { NgModule } from '@angular/core';
import { StartComponent } from './start/start.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StartComponent, FooterComponent],
  imports: [RouterModule],
  exports: [StartComponent, FooterComponent],
})
export class CoreModule {}
