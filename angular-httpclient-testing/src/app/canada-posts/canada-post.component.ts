import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { CanadaPostApiService } from '../shared/canada-post-api.service';

@Component({
  selector: 'app-canada-post',
  templateUrl: './canada-post.component.html'
})
export class CanadaPostComponent implements OnInit {
  constructor(private canadaPost: CanadaPostApiService
  ) {

  }

  ngOnInit() {
  }
  getAddress(searchTerm: string) {
    return this.canadaPost.getAddress('m2j0b4');
  }
}
