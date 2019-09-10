import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/observable/of';

import { CanadaPostComponent } from './canada-post.component';
import { CanadaPostApiService } from '../shared/canada-post-api.service';
import { CanadaPostModule } from './canada-post.module';
import { HttpClientModule } from '@angular/common/http';

describe('CanadaPostComponent', () => {
  let component: CanadaPostComponent;
  let fixture: ComponentFixture<CanadaPostComponent>;

  beforeEach(async(() => {
    let injector;
    let canadaPost: CanadaPostApiService;

    TestBed.configureTestingModule({
        imports: [HttpClientModule, ReactiveFormsModule, CanadaPostModule],
        providers: [
          { provide: CanadaPostApiService, useClass: CanadaPostApiService }
        ]
      })
      .compileComponents();

    injector = getTestBed();
    canadaPost = injector.get(CanadaPostApiService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanadaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('#ngOnInit', () => {
    it('should load the first users of postalcode', () => {
      debugger;
      component.ngOnInit();
      component.getAddress('searchTearm').subscribe(
        data => {
          debugger;
          expect(data['Items'][0].Description).toBeDefined(true);
        },
        error => {
          console.log(error);
        }
      );
    });
  });
});
