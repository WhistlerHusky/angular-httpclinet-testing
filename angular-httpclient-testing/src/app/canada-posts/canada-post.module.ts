import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CanadaPostComponent } from './canada-post.component';
import { CanadaPostApiService	 } from './../shared/canada-post-api.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [CanadaPostComponent],
  providers: [CanadaPostApiService],
  exports: [CanadaPostComponent]
})
export class CanadaPostModule { }
