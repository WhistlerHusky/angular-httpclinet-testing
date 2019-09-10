import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { CanadaPostApiService } from './canada-post-api.service';
import { CanadaPostModule } from './../canada-posts/canada-post.module';
import { HttpClientModule } from '@angular/common/http';

describe('CanadaPostApiService', () => {
  let injector;
  let service: CanadaPostApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CanadaPostModule, HttpClientModule],
      providers: [CanadaPostApiService]
    });

    injector = getTestBed();
    service = injector.get(CanadaPostApiService);
  });

  describe('#getAddress', () => {
    it('should return an address', () => {
      debugger;
      service.getAddress('m2j0b4').subscribe(
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
