import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoseComponent } from './nose.component';

describe('NoseComponent', () => {
  let component: NoseComponent;
  let fixture: ComponentFixture<NoseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoseComponent]
    });
    fixture = TestBed.createComponent(NoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
