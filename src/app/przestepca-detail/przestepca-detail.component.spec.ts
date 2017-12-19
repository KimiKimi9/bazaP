import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrzestepcaDetailComponent } from './przestepca-detail.component';

describe('PrzestepcaDetailComponent', () => {
  let component: PrzestepcaDetailComponent;
  let fixture: ComponentFixture<PrzestepcaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrzestepcaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrzestepcaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
