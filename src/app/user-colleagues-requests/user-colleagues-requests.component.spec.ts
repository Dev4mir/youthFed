import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserColleaguesRequestsComponent } from './user-colleagues-requests.component';

describe('UserColleaguesRequestsComponent', () => {
  let component: UserColleaguesRequestsComponent;
  let fixture: ComponentFixture<UserColleaguesRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserColleaguesRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserColleaguesRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
