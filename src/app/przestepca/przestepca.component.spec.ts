import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrzestepcaComponent } from './przestepca.component';

describe('PrzestepcaComponent', () => {
  let component: PrzestepcaComponent;
  let fixture: ComponentFixture<PrzestepcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrzestepcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrzestepcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
