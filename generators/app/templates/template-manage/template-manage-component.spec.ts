import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= mainTitle %>ManageComponent } from './<%= secondaryTitle %>-manage.component';

describe('<%= mainTitle %>ManageComponent', () => {
  let component: <%= mainTitle %>ManageComponent;
  let fixture: ComponentFixture<<%= mainTitle %>ManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ <%= mainTitle %>ManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= mainTitle %>ManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
