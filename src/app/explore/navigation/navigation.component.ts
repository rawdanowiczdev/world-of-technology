import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  searchForm!: FormGroup;

  constructor(private builder: FormBuilder) {}

  get search() {
    return this.searchForm.get('search')!;
  }

  ngOnInit(): void {
    this.searchForm = this.builder.group({
      search: new FormControl(''),
    });
  }
}
