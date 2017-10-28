import { TestBed, inject } from '@angular/core/testing';

import { BlogFeedsService } from './blog-feeds.service';

describe('BlogFeedsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogFeedsService]
    });
  });

  it('should be created', inject([BlogFeedsService], (service: BlogFeedsService) => {
    expect(service).toBeTruthy();
  }));
});
