import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsEnterpriseNgComponent } from './ids-enterprise-ng.component';

describe('IdsEnterpriseNgComponent', () => {
  let component: IdsEnterpriseNgComponent;
  let fixture: ComponentFixture<IdsEnterpriseNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdsEnterpriseNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdsEnterpriseNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
