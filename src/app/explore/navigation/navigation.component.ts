import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ContentService } from '../content/content.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  searchForm!: FormGroup;

  prevOffsetY = window.pageYOffset;
  @ViewChild('nav') nav!: ElementRef;

  constructor(
    private builder: FormBuilder,
    private renderer: Renderer2,
    private router: Router,
    private contentService: ContentService
  ) {}

  get search() {
    return this.searchForm.get('search')!;
  }

  ngOnInit(): void {
    this.searchForm = this.builder.group({
      search: new FormControl(''),
    });
  }

  @HostListener('window:scroll')
  hideNav(): void {
    let currentOffsetY = window.pageYOffset;
    if (this.prevOffsetY > currentOffsetY) {
      this.renderer.removeClass(this.nav.nativeElement, 'nav-hidden');
    } else {
      this.renderer.addClass(this.nav.nativeElement, 'nav-hidden');
    }
    this.prevOffsetY = currentOffsetY;
  }

  searchArticles(): void {
    window.scrollTo(0, 0);
    this.router.navigate(['explore']);
    this.contentService.showSearchResults(this.search.value);
  }
}
