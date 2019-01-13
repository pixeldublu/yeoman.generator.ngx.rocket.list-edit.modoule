import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= mainTitle %>ListComponent } from '@app/<%= secondaryTitle %>/<%= secondaryTitle %>-list/<%= secondaryTitle %>-list.component';

describe('<%= mainTitle %>ListComponent', () => {
  let component: <%= mainTitle %>ListComponent;
  let fixture: ComponentFixture<<%= mainTitle %>ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ <%= mainTitle %>ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= mainTitle %>ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
