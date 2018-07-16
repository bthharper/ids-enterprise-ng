import { TestBed, inject } from '@angular/core/testing';

import { IdsEnterpriseNgService } from './ids-enterprise-ng.service';

describe('IdsEnterpriseNgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdsEnterpriseNgService]
    });
  });

  it('should be created', inject([IdsEnterpriseNgService], (service: IdsEnterpriseNgService) => {
    expect(service).toBeTruthy();
  }));
});
