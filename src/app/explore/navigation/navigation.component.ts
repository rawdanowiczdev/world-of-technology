import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { ContentService } from '../content/content.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  searchForm!: FormGroup;

  constructor(
    private builder: FormBuilder,
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

  searchArticles(): void {
    this.contentService.showSearchResults(this.search.value);
  }
}
