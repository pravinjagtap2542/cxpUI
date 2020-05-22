import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestUserAccessTypeComponent } from './request-user-access-type.component';

describe('RequestUserAccessTypeComponent', () => {
  let component: RequestUserAccessTypeComponent;
  let fixture: ComponentFixture<RequestUserAccessTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestUserAccessTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestUserAccessTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
