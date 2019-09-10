import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanadaPostApiService } from './canada-post-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ CanadaPostApiService],
})
export class SharedModule { }
