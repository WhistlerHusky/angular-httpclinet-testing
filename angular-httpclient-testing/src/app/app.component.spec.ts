import { TestBed, async} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CanadaPostModule } from './canada-posts/canada-post.module';
import { CanadaPostApiService } from './shared/canada-post-api.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,CanadaPostModule],
      declarations: [AppComponent],
      providers: [CanadaPostApiService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
