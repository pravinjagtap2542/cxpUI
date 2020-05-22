import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollForApplicationsComponent } from './enroll-for-applications.component';

describe('EnrollForApplicationsComponent', () => {
  let component: EnrollForApplicationsComponent;
  let fixture: ComponentFixture<EnrollForApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollForApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollForApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
