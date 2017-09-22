import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserColleaguesComponent } from './user-colleagues.component';

describe('UserColleaguesComponent', () => {
  let component: UserColleaguesComponent;
  let fixture: ComponentFixture<UserColleaguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserColleaguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserColleaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
