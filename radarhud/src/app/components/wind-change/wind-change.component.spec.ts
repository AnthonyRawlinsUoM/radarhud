import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindChangeComponent } from './wind-change.component';

describe('WindChangeComponent', () => {
  let component: WindChangeComponent;
  let fixture: ComponentFixture<WindChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
