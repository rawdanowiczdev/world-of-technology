import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShortenPipe } from './shorten.pipe';

@NgModule({
  declarations: [ShortenPipe],
  imports: [CommonModule],
  exports: [CommonModule, ShortenPipe],
})
export class SharedModule {}
