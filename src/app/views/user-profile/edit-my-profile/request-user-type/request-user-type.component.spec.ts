import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestUserTypeComponent } from './request-user-type.component';

describe('RequestUserTypeComponent', () => {
  let component: RequestUserTypeComponent;
  let fixture: ComponentFixture<RequestUserTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestUserTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestUserTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
